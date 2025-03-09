import { cn } from '../../helpers/cn.helper'
import { ReactDivProps } from '../../types/react.props.type'

export function Skeleton({ className, ...props }: ReactDivProps) {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-primary/10', className)}
      {...props}
    />
  )
}
