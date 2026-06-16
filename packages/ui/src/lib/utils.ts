import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 Tailwind CSS 类名，使用 twMerge 解决类名冲突。
 * 三层调用顺序：cva 变体 -> 内部条件类 -> 用户 className
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
