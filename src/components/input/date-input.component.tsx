import { cn } from '@/helpers/cn.helper'
import { CalendarIcon } from '@/icons'
import React, { forwardRef, useState } from 'react'
import { Input, TextInputProps } from './input.component'

export interface DateInputProps extends TextInputProps {
  name: string
  format?: string
  separator?: string
}

function isValidDatePart(day: number, month: number, year: number) {
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    { format = 'JJ/MM/AAAA', label, separator = '/', onChange, name, ...rest },
    ref
  ) => {
    const [value, setValue] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value.replace(/\D/g, '')
      let formattedValue = ''

      if (inputValue.length <= 2) {
        formattedValue = inputValue
      } else if (inputValue.length <= 4) {
        formattedValue =
          inputValue.slice(0, 2) + separator + inputValue.slice(2)
      } else {
        formattedValue =
          inputValue.slice(0, 2) +
          separator +
          inputValue.slice(2, 4) +
          separator +
          inputValue.slice(4, 8)
      }

      if (inputValue.length >= 2) {
        const day = Number(inputValue.slice(0, 2))
        if (day < 1 || day > 31) {
          return
        }
      }

      if (inputValue.length >= 4) {
        const day = Number(inputValue.slice(0, 2))
        const month = Number(inputValue.slice(2, 4))
        if (month < 1 || month > 12 || !isValidDatePart(day, month, 1900)) {
          return
        }
      }

      if (inputValue.length === 8) {
        const day = Number(inputValue.slice(0, 2))
        const month = Number(inputValue.slice(2, 4))
        const year = Number(inputValue.slice(4, 8))
        if (!isValidDatePart(day, month, year)) {
          return
        }
      }

      setValue(formattedValue)

      if (onChange) {
        onChange({
          ...e,
          target: {
            ...e.target,
            name,
            value: formattedValue
          }
        })
      }
    }

    return (
      <div className="relative">
        <Input
          ref={ref as any}
          type="text"
          name={name}
          label={label}
          value={value}
          maxLength={10}
          placeholder={format}
          onChange={handleInputChange}
          {...rest}
        />
        {/* Input icon */}
        <div
          className={cn(
            'absolute right-0 px-3 pt-2',
            label ? 'top-8' : 'top-0'
          )}>
          <CalendarIcon className="h-6 w-6 fill-gray-600" />
        </div>
      </div>
    )
  }
)

DateInput.displayName = 'DateInput'

export { DateInput }
