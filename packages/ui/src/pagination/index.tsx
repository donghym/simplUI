import { forwardRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  paginationVariants,
  paginationItemVariants,
  paginationJumperVariants,
  paginationTotalVariants,
  paginationSizeChangerVariants,
} from './pagination-variants'
import type { PaginationProps } from './types'

const SELECT_CLASS =
  'h-[32px] px-2 rounded-md border border-solid border-border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed'
const INPUT_CLASS =
  'w-[50px] h-[32px] px-2 rounded-md border border-solid border-border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed'

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const {
    className,
    current,
    defaultCurrent = 1,
    total = 0,
    pageSize,
    defaultPageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    showSizeChanger = false,
    showQuickJumper = false,
    showTotal = false,
    onChange,
    onPageSizeChange,
    disabled = false,
    simple = false,
    ...rest
  } = props

  const [innerCurrent, setInnerCurrent] = useState(defaultCurrent)
  const [innerPageSize, setInnerPageSize] = useState(defaultPageSize)

  const isControlledCurrent = current !== undefined
  const isControlledPageSize = pageSize !== undefined
  const currentPage = isControlledCurrent ? current : innerCurrent
  const currentPageSize = isControlledPageSize ? pageSize : innerPageSize

  const totalPages = Math.ceil(total / currentPageSize)
  const startItem = (currentPage - 1) * currentPageSize + 1
  const endItem = Math.min(currentPage * currentPageSize, total)

  const handlePageChange = (page: number) => {
    if (disabled || page < 1 || page > totalPages) return
    if (!isControlledCurrent) setInnerCurrent(page)
    onChange?.(page, currentPageSize)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    if (disabled) return
    const newTotalPages = Math.ceil(total / newPageSize)
    const newPage = Math.min(currentPage, newTotalPages)
    if (!isControlledPageSize) setInnerPageSize(newPageSize)
    if (!isControlledCurrent && newPage !== currentPage) setInnerCurrent(newPage)
    onPageSizeChange?.(newPageSize, newPage)
    if (newPage !== currentPage) onChange?.(newPage, newPageSize)
  }

  const handleJumperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value >= 1 && value <= totalPages) handlePageChange(value)
  }

  const getPageNumbers = () => {
    if (simple) return []
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) pages.push(i)
        pages.push('ellipsis')
      } else if (currentPage >= totalPages - 2) {
        pages.push('ellipsis')
        for (let i = totalPages - 3; i <= totalPages - 1; i++) pages.push(i)
      } else {
        pages.push('ellipsis')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push('ellipsis')
      }
      pages.push(totalPages)
    }
    return pages
  }

  const renderPageItem = (page: number | 'ellipsis', index: number) => {
    if (page === 'ellipsis') {
      return (
        <span key={`ellipsis-${index}`} className="inline-flex items-center justify-center min-w-[32px] h-[32px] text-muted-foreground">
          ...
        </span>
      )
    }
    const isActive = page === currentPage
    return (
      <button
        key={page}
        type="button"
        aria-current={isActive ? 'page' : undefined}
        onClick={() => handlePageChange(page)}
        className={cn(paginationItemVariants({ active: isActive, disabled }))}
      >
        {page}
      </button>
    )
  }

  const isFirstDisabled = currentPage <= 1 || disabled
  const isLastDisabled = currentPage >= totalPages || disabled

  return (
    <nav ref={ref} aria-label="pagination" className={cn('sui-pagination', paginationVariants({ disabled, simple }), className)} {...rest}>
      {showTotal && <span className={cn(paginationTotalVariants())}>共 {total} 条，第 {startItem}-{endItem} 条</span>}
      {simple ? (
        <>
          <button type="button" aria-label="上一页" onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstDisabled} className={cn(paginationItemVariants({ disabled: isFirstDisabled }), 'px-1')}>
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="text-foreground">{currentPage} / {totalPages}</span>
          <button type="button" aria-label="下一页" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastDisabled} className={cn(paginationItemVariants({ disabled: isLastDisabled }), 'px-1')}>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </>
      ) : (
        <>
          <button type="button" aria-label="第一页" onClick={() => handlePageChange(1)} disabled={isFirstDisabled} className={cn(paginationItemVariants({ disabled: isFirstDisabled }), 'px-1')}>
            <ChevronsLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" aria-label="上一页" onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstDisabled} className={cn(paginationItemVariants({ disabled: isFirstDisabled }), 'px-1')}>
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          {getPageNumbers().map((page, index) => renderPageItem(page, index))}
          <button type="button" aria-label="下一页" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastDisabled} className={cn(paginationItemVariants({ disabled: isLastDisabled }), 'px-1')}>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" aria-label="最后一页" onClick={() => handlePageChange(totalPages)} disabled={isLastDisabled} className={cn(paginationItemVariants({ disabled: isLastDisabled }), 'px-1')}>
            <ChevronsRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </>
      )}
      {showSizeChanger && (
        <div className={cn(paginationSizeChangerVariants())}>
          <select value={currentPageSize} onChange={(e) => handlePageSizeChange(parseInt(e.target.value, 10))} disabled={disabled} aria-label="每页条数" className={SELECT_CLASS}>
            {pageSizeOptions.map((size) => (<option key={size} value={size}>{size} 条/页</option>))}
          </select>
        </div>
      )}
      {showQuickJumper && !simple && (
        <div className={cn(paginationJumperVariants())}>
          <span>跳至</span>
          <input type="number" min={1} max={totalPages} defaultValue={currentPage} onChange={handleJumperChange} disabled={disabled} aria-label="跳转页码" className={INPUT_CLASS} />
          <span>页</span>
        </div>
      )}
    </nav>
  )
})
Pagination.displayName = 'Pagination'