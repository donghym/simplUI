import type { AutoCompleteOption } from './types'

/** 将字符串数组或选项数组统一转换为选项数组 */
export function normalizeOptions(
  options: Array<string | AutoCompleteOption> | undefined,
): AutoCompleteOption[] {
  if (!options) return []
  return options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt,
  )
}

/** 默认过滤函数 */
export function defaultFilterOption(
  inputValue: string,
  option: AutoCompleteOption,
): boolean {
  const label =
    typeof option.label === 'string' ? option.label : option.value
  return label.toLowerCase().includes(inputValue.toLowerCase())
}
