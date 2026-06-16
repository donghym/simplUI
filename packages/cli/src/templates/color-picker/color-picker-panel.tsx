import React, { useCallback, useRef } from 'react'
import { cn } from '../lib/utils'
import { hsvToHex, defaultPresets, placementStyles } from './color-picker-utils'
import { presetSwatchVariants } from './color-picker-variants'

interface PanelProps {
  color: string
  hsv: { h: number; s: number; v: number }
  formatValue: string
  allowClear: boolean
  presets?: typeof defaultPresets
  onHexInputChange: (val: string) => void
  onComplete: (val: string) => void
  onClear: () => void
  onFormatCycle: () => void
  onPresetClick: (c: string) => void
}

export const ColorPickerPanel: React.FC<PanelProps> = ({
  color,
  hsv,
  formatValue,
  allowClear,
  presets,
  onHexInputChange,
  onComplete,
  onClear,
  onFormatCycle,
  onPresetClick,
}) => {
  const hueRef = useRef<HTMLDivElement>(null)

  const handleHueMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const bar = hueRef.current
    if (!bar) return
    const updateHue = (clientX: number) => {
      const rect = bar.getBoundingClientRect()
      let x = (clientX - rect.left) / rect.width
      x = Math.max(0, Math.min(1, x))
      const hue = Math.round(x * 360)
      const newColor = hsvToHex(hue, hsv.s, hsv.v)
      onHexInputChange(newColor)
    }
    updateHue(e.clientX)
    const onMove = (ev: MouseEvent) => updateHue(ev.clientX)
    const onUp = (ev: MouseEvent) => {
      updateHue(ev.clientX)
      onComplete(color)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [hsv, onHexInputChange, onComplete, color])

  const handleColorPreviewMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const updateColor = (clientX: number, clientY: number) => {
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
      const s = Math.round(x * 100)
      const v = Math.round((1 - y) * 100)
      const newColor = hsvToHex(hsv.h, s, v)
      onHexInputChange(newColor)
    }
    updateColor(e.clientX, e.clientY)
    const onMove = (ev: MouseEvent) => updateColor(ev.clientX, ev.clientY)
    const onUp = (ev: MouseEvent) => {
      updateColor(ev.clientX, ev.clientY)
      onComplete(color)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [hsv.h, onHexInputChange, onComplete, color])

  const mergedPresets = presets || defaultPresets

  return (
    <div
      className="sui-color-picker__dropdown px-3 pt-3 pb-2 bg-white rounded-lg shadow-[0_6px_16px_0_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12),0_9px_28px_8px_rgba(0,0,0,0.05)] min-w-[234px]"
      style={{
        position: 'absolute',
        ...placementStyles.bottomLeft,
        zIndex: 1070,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* color preview */}
      <div
        className="h-40 rounded relative mb-2 cursor-crosshair bg-[linear-gradient(to_top,#000,transparent),linear-gradient(to_right,#fff,var(--hue-color))]"
        style={{ '--hue-color': hsvToHex(hsv.h, 100, 100) } as React.CSSProperties}
        onMouseDown={handleColorPreviewMouseDown}
      >
        <div
          className="absolute w-4 h-4 rounded-full border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{
            left: `${hsv.s}%`,
            top: `${100 - hsv.v}%`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: color,
          }}
        />
      </div>

      {/* hue slider */}
      <div className="mb-2">
        <div
          ref={hueRef}
          onMouseDown={handleHueMouseDown}
          className="h-3 rounded-full cursor-pointer relative bg-[linear-gradient(to_right,#f00_0%,#ff0_17%,#0f0_33%,#0ff_50%,#00f_67%,#f0f_83%,#f00_100%)]"
        >
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-white border-2 border-[#1677ff] shadow-[0_1px_3px_rgba(0,0,0,0.2)] pointer-events-none"
            style={{ left: `${(hsv.h / 360) * 100}%` }}
          />
        </div>
      </div>

      {/* format display + clear */}
      <div className="flex items-center gap-1 mb-2">
        <div
          onClick={onFormatCycle}
          className="flex-1 px-2 py-1 border border-[#d9d9d9] rounded text-xs font-mono text-[#333] cursor-pointer select-none text-center"
          title="Click to switch format"
        >
          {formatValue}
        </div>
        {allowClear && (
          <div
            onClick={onClear}
            className="px-2 py-1 border border-[#d9d9d9] rounded text-xs text-[#666] cursor-pointer select-none whitespace-nowrap"
          >
            Clear
          </div>
        )}
      </div>

      {/* presets */}
      {mergedPresets.map((group) => (
        <div key={group.label} className="mb-1">
          <div className="text-[11px] text-[#999] mb-1 select-none">
            {group.label}
          </div>
          <div className="flex flex-wrap gap-1">
            {group.colors.map((c) => (
              <div
                key={c}
                onClick={() => onPresetClick(c)}
                className={cn(presetSwatchVariants({ selected: color.toLowerCase() === c.toLowerCase() }))}
                style={{ '--swatch-color': c } as React.CSSProperties}
                title={c}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
