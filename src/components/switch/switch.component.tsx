/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import * as SwitchUI from '@radix-ui/react-switch'
import { forwardRef } from 'react'
import { v4 as uuid } from 'uuid'
import { ErrorIcon } from '../../assets/icons'
import { cn } from '../../helpers/cn.helper'

export interface SwitchProps extends SwitchUI.SwitchProps {
  label?: string
  errorText?: string
  orientation?: 'vertical' | 'horizontal'
  variant?: 'primary' | 'secondary' | 'ternary' | 'error'
}

export const Switch = forwardRef<any, SwitchProps>(
  (
    {
      label,
      name,
      checked,
      disabled,
      onChange,
      className,
      errorText,
      defaultChecked,
      onCheckedChange,
      variant = 'ternary',
      orientation = 'horizontal',
      ...rest
    },
    ref
  ) => {
    const inputId = uuid()

    const errorBlock = errorText && (
      <div className="flex text-red-700">
        <ErrorIcon className="size-5 mr-1 mt-1" />
        <span className="text-lg font-bold">{errorText}</span>
      </div>
    )

    return (
      <div
        className={cn(
          'flex',
          className,
          errorText && 'border border-red-500',
          orientation === 'horizontal'
            ? 'flex-row items-start gap-x-2'
            : 'flex-col'
        )}>
        {label && (
          <label htmlFor={inputId} className="font-bold text-lg mb-1">
            {label}
          </label>
        )}
        <SwitchUI.Root
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          onChange={(value) => onChange?.({ target: { name, value } } as any)}
          onCheckedChange={(value) =>
            onChange?.({ target: { name, value } } as any)
          }
          className={cn(
            disabled && 'cursor-not-allowed bg-gray-300',
            variant === 'error' && 'data-[state=checked]:bg-[#DB2E3B]',
            variant === 'ternary' && 'data-[state=checked]:bg-ternary',
            variant === 'secondary' && 'data-[state=checked]:bg-secondary',
            variant === 'primary' && 'data-[state=checked]:bg-primary-light',
            'relative h-[25px] w-[42px] cursor-default rounded-full bg-black outline-none'
          )}
          {...rest}>
          <SwitchUI.Thumb
            className={cn(
              'block size-[21px] translate-x-0.5 rounded-full bg-white transition-transform',
              'duration-100 will-change-transform data-[state=checked]:translate-x-[19px]'
            )}
          />
        </SwitchUI.Root>
        {errorBlock}
      </div>
    )
  }
)
