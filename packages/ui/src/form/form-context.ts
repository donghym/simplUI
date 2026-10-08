import { createContext, useContext } from 'react'

interface FormContextValue {
  layout: 'horizontal' | 'vertical' | 'inline'
  labelAlign: 'left' | 'right'
  colon: boolean
  requiredMark: 'start' | 'end' | 'hide'
}

export const FormContext = createContext<FormContextValue | null>(null)

export function useFormContext() {
  const ctx = useContext(FormContext)
  return ctx
}