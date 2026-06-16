import React, { forwardRef, useState, useCallback, useEffect, useMemo } from 'react'
import { cn } from '../lib/utils'
import type { ColorPickerProps } from './types'
import { hexToHsv } from './color-picker-utils'
import { ColorPickerPanel } from './color-picker-panel'
import { colorPickerTriggerVariants, colorPickerInputVariants } from './color-picker-variants'

export type { ColorPickerProps }

/**
 * ColorPicker 颜色选择器组件
 * 用于选择颜色值，支持多种格式输出。
 */
export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(({
  value: controlledValue,
  defaultValue = '#1677FF',
  onChange,
  onChangeComplete,
  disabled = false,
  allowClear = false,
  showText = true,
  size = 'medium',
  format: formatProp,
  presets,
  open: controlledOpen,
  onOpenChange,
  style,
  className,
}, ref) => {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [internalOpen, setInternalOpen] = useState(false)
  const [format, setFormat] = useState<'hex' | 'rgb' | 'hsb'>(formatProp || 'hex')
  const [hexInput, setHexInput] = useState('')

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const color = isControlled ? controlledValue : internalValue
  const hsv = useMemo(() => hexToHsv(color), [color])

  useEffect(() => { setHexInput(color) }, [color])

  const setOpen = useCallback((next: boolean) => { if (!isControlled) setInternalOpen(next); onOpenChange?.(next) }, [isControlled, onOpenChange])
  const handleChange = useCallback((val: string) => {
    if (disabled) return
    const normalized = val.startsWith('#') ? val : `#${val}`
    if (!/^#[0-9a-fA-F]{6}$/.test(normalized)) return
    if (!isControlled) setInternalValue(normalized); onChange?.(normalized)
  }, [disabled, isControlled, onChange])
  const handleComplete = useCallback((val: string) => { onChangeComplete?.(val) }, [onChangeComplete])
  const handleClear = useCallback(() => { if (disabled) return; handleChange(defaultValue); setOpen(false) }, [disabled, defaultValue, handleChange, setOpen])
  const handleToggle = useCallback(() => { if (disabled) return; setOpen(!open) }, [disabled, open, setOpen])
  const handleHexInputBlur = useCallback(() => { handleChange(hexInput); handleComplete(hexInput) }, [hexInput, handleChange, handleComplete])
  const handlePresetClick = useCallback((c: string) => { handleChange(c); handleComplete(c); setOpen(false) }, [handleChange, handleComplete, setOpen])
  const handleFormatCycle = useCallback(() => { setFormat(prev => prev === 'hex' ? 'rgb' : prev === 'rgb' ? 'hsb' : 'hex') }, [])

  const formatValue = useMemo(() => {
    const r = parseInt(color.slice(1, 3), 16), g = parseInt(color.slice(3, 5), 16), b = parseInt(color.slice(5, 7), 16)
    switch (format) {
      case 'rgb': return `rgb(${r}, ${g}, ${b})`
      case 'hsb': return `hsb(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`
      default: return color.toUpperCase()
    }
  }, [color, format, hsv])

  return (
    <div ref={ref} className={cn('sui-color-picker relative inline-flex items-center gap-2', disabled && 'sui-color-picker--disabled', className)} style={style}>
      <div className={cn('sui-color-picker__trigger', colorPickerTriggerVariants({ size, disabled }))}
        onClick={handleToggle}
        style={{ '--trigger-bg': color } as React.CSSProperties}>
        <div className="w-full h-full rounded-[5px] bg-[var(--trigger-bg)]" />
      </div>
      {showText && (
        <input type="text" value={hexInput} onChange={e => setHexInput(e.target.value)} onBlur={handleHexInputBlur} onKeyDown={e => e.key === 'Enter' && handleHexInputBlur()} disabled={disabled}
          className={colorPickerInputVariants({ size })} />
      )}
      {open && (
        <ColorPickerPanel color={color} hsv={hsv} formatValue={formatValue} allowClear={allowClear} presets={presets}
          onHexInputChange={handleChange} onComplete={handleComplete} onClear={handleClear} onFormatCycle={handleFormatCycle} onPresetClick={handlePresetClick} />
      )}
    </div>
  )
})
ColorPicker.displayName = 'ColorPicker'
