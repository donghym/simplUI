import { forwardRef, useState, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { tagInputVariants } from './tag-input-variants'
import { useDragHandlers } from './tag-input-utils'
import { DefaultTagRender } from './tag-render'
import type { TagInputProps } from './types'

/** 默认分隔符：Enter 和逗号 */
const DEFAULT_DELIMITERS = ['Enter', ',']

/**
 * TagInput 标签输入框组件
 *
 * 输入框与标签展示区组合，支持 Enter/逗号分割生成标签、删除标签、数量限制等。
 * 使用 forwardRef 转发容器 div 引用。
 */
export const TagInput = forwardRef<HTMLDivElement, TagInputProps>((props, ref) => {
  const {
    className,
    status,
    value,
    defaultValue,
    onChange,
    maxTags,
    placeholder = '请输入标签',
    delimiter = DEFAULT_DELIMITERS,
    disabled = false,
    readonly = false,
    tagRender,
    allowDuplicate = false,
    allowClear = false,
    draggable = false,
    ...rest
  } = props

  const [innerTags, setInnerTags] = useState<string[]>(defaultValue ?? [])
  const [inputValue, setInputValue] = useState('')
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const isControlled = value !== undefined
  const tags = isControlled ? value : innerTags
  const isMaxReached = maxTags !== undefined && tags.length >= maxTags
  const inputDisabled = disabled || readonly || isMaxReached

  /** 更新标签数组 */
  const updateTags = useCallback(
    (newTags: string[]) => {
      if (!isControlled) setInnerTags(newTags)
      onChange?.(newTags)
    },
    [isControlled, onChange],
  )

  /** 添加标签 */
  const addTag = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      if (!allowDuplicate && tags.includes(trimmed)) return
      if (isMaxReached) return
      updateTags([...tags, trimmed])
    },
    [tags, allowDuplicate, isMaxReached, updateTags],
  )

  /** 删除指定索引的标签 */
  const removeTag = useCallback(
    (index: number) => {
      const newTags = tags.filter((_, i) => i !== index)
      updateTags(newTags)
    },
    [tags, updateTags],
  )

  /** 清空所有标签 */
  const clearAll = useCallback(() => {
    updateTags([])
  }, [updateTags])

  /** 拖拽处理函数 */
  const dragHandlers = useDragHandlers(tags, updateTags, setDragOverIndex)

  /** 输入框键盘事件 */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputValue === '' && tags.length > 0 && !readonly) {
      removeTag(tags.length - 1)
      return
    }
    if (delimiter.includes(e.key)) {
      e.preventDefault()
      addTag(inputValue)
      setInputValue('')
    }
  }

  /** 输入框失焦时提交 */
  const handleBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
      setInputValue('')
    }
  }

  /** 渲染单个标签 */
  const renderTag = (tag: string, index: number) => {
    if (tagRender) {
      return tagRender(tag, () => removeTag(index))
    }
    return (
      <DefaultTagRender
        tag={tag}
        index={index}
        disabled={disabled}
        readonly={readonly}
        draggable={draggable}
        dragOverIndex={dragOverIndex}
        dragHandlers={dragHandlers}
        onRemove={removeTag}
      />
    )
  }

  const showClear = allowClear && tags.length > 0 && !disabled && !readonly

  return (
    <div
      ref={ref}
      className={cn(
        tagInputVariants({ status }),
        disabled && 'cursor-not-allowed opacity-50',
        readonly && 'bg-muted',
        className,
      )}
      aria-invalid={status === 'error' || undefined}
      {...rest}
    >
      {tags.map((tag, index) => renderTag(tag, index))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        disabled={inputDisabled}
        placeholder={isMaxReached ? '已达标签上限' : placeholder}
        className="flex-1 min-w-[80px] border-0 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
      />
      {showClear && (
        <button
          type="button"
          onClick={clearAll}
          aria-label="清空所有标签"
          className="ml-1 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
})

TagInput.displayName = 'TagInput'

export type { TagInputProps, TagInputStatus } from './types'
export { tagInputVariants } from './tag-input-variants'
export default TagInput