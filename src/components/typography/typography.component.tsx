import React, { JSX } from 'react'
import { cn } from './../../helpers/cn.helper'
import { ReactHeadingProps } from '../../types/react.props.type'

export interface CaptionProps extends ReactHeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  text: string | JSX.Element
  type: 1 | 2 | 3 | 4
  subCaption?: React.ReactNode
  withDivider?: boolean
}

export function Typography({
  tag,
  text,
  subCaption,
  type,
  withDivider,
  className,
  ...restProps
}: CaptionProps) {
  const Tag = tag

  const MainCaption = (
    <Tag
      className={cn(
        {
          'font-intelone-display font-bold text-2xl text-secondary': type === 1,
          'font-bold text-xl text-secondary': type === 2,
          'font-medium text-lg text-[#A7A7A7]': type === 3,
          'font-normal text-base text-[#666666]': type === 4
        },
        !subCaption && !withDivider && className
      )}
      {...restProps}>
      {text}
    </Tag>
  )

  if (withDivider) {
    return (
      <div className={className}>
        {MainCaption}
        {withDivider && <div className="h-[1px] bg-[#EEEEEE] mt-1" />}
      </div>
    )
  }

  if (!subCaption) {
    return MainCaption
  }

  return (
    <div className={cn(className, 'flex flex-col')}>
      {MainCaption}
      {subCaption && <div className="-mt-1">{subCaption}</div>}
    </div>
  )
}
