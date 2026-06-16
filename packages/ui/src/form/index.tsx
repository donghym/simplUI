import { Form } from './form'
import { FormItem } from './form-item'

export { Form, FormItem }
export type {
  FormProps,
  FormItemProps,
  FormLayout,
  ValidateStatus,
  LabelAlign,
  ResponsiveCol,
  ColSpan,
} from './types'
export { formVariants, formItemVariants } from './form-variants'
export { FormContext, useFormContext } from './form'

export default Object.assign(Form, { Item: FormItem })