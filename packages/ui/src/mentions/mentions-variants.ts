import { cva } from 'class-variance-authority'

/**
 * Mentions 容器变体配置
 */
export const mentionsVariants = cva('relative inline-block w-full')

/**
 * Mentions 文本框变体配置
 *
 * 定义文本框的基础样式和禁用状态。
 */
export const mentionsTextareaVariants = cva(
  'w-full rounded-md border border-border text-foreground text-sm leading-normal resize-y px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  {
    variants: {
      /** 禁用状态 */
      disabled: {
        /** 禁用时灰色背景，不可交互 */
        true: 'bg-muted cursor-not-allowed',
        /** 正常时白色背景 */
        false: 'bg-white cursor-text',
      },
    },
    defaultVariants: { disabled: false },
  },
)

/**
 * Mentions 下拉菜单变体配置
 */
export const mentionsDropdownVariants = cva(
  'absolute top-full left-0 mt-1 min-w-[120px] bg-white rounded-lg shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)] z-[1070] max-h-[250px] overflow-auto',
)

/**
 * Mentions 选项变体配置
 *
 * 定义每个选项的激活和禁用状态样式。
 */
export const mentionsOptionVariants = cva(
  'px-3 py-2 cursor-pointer',
  {
    variants: {
      /** 是否激活状态 */
      active: {
        /** 激活时蓝色背景 */
        true: 'bg-primary-50',
      },
      /** 是否禁用状态 */
      disabled: {
        /** 禁用时灰色文字 */
        true: 'text-muted-foreground',
      },
    },
    compoundVariants: [
      /** 非激活且非禁用时的默认样式 */
      { active: false, disabled: false, className: 'bg-transparent text-foreground' },
    ],
    defaultVariants: { active: false, disabled: false },
  },
)