import { createContext } from 'react'

/** Breadcrumb Context，传递分隔符配置 */
interface BreadcrumbContextValue {
  separator: React.ReactNode
}

export const BreadcrumbContext = createContext<BreadcrumbContextValue>({ separator: '/' })