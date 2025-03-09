import { cn } from '@/helpers/cn.helper'
import { ErrorIcon } from '@/icons'
import { ReactInputProps } from '@/react-props.types'
import React from 'react'

export enum InputSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface PinCodeProps extends Omit<ReactInputProps, 'onChange'> {
  length: number
  errorText?: string
  inputSize?: InputSize
  classNameWrapper?: string
  variant?: 'neutral' | 'error'
  onChange?: (value: string) => void
}

export const PinCode = React.forwardRef<HTMLInputElement, PinCodeProps>(
  (
    {
      length,
      onChange,
      errorText,
      className,
      type = 'text',
      defaultValue,
      classNameWrapper,
      disabled = false,
      variant = 'neutral',
      inputSize = InputSize.small,
      ...props
    }: PinCodeProps,
    ref
  ) => {
    const inputsRef = React.useRef<Array<HTMLInputElement | null>>([])

    const handleChange =
      (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const inputArray = Array.from({ length }).map(
          (_, idx) => inputsRef.current[idx]?.value || ''
        )

        inputArray[index] = inputValue

        if (onChange) {
          onChange(inputArray.join(''))
        }

        if (inputValue && index < length - 1) {
          inputsRef.current[index + 1]?.focus()
        }
      }

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (
        e.key === 'Backspace' &&
        index > 0 &&
        !inputsRef.current[index]?.value
      ) {
        inputsRef.current[index - 1]?.focus()
      }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
      const pasteData = e.clipboardData.getData('text').slice(0, length)
      pasteData.split('').forEach((char, idx) => {
        if (inputsRef.current[idx]) {
          inputsRef.current[idx]!.value = char
        }
      })

      if (onChange) {
        onChange(pasteData)
      }

      inputsRef.current[pasteData.length - 1]?.focus()
    }

    const defaultCn = cn(
      'bg-white border-2 border-gray-400 focus:border-secondary focus:ring-neutral-600 focus:scale-110 transition-all  outline-none py-1 text-lg text-secondary block text-center font-extrabold  placeholder:text-gray-300 disabled:opacity-50 disabled:pointer-events-none transition-all ease-in-out duration-100',
      variant === 'error' && 'border-red-700 focus:border-red-700',
      disabled && 'bg-gray-300',
      inputSize === InputSize.small && 'size-10',
      inputSize === InputSize.medium && 'size-12',
      inputSize === InputSize.large && 'size-16'
    )

    const errorBlock = errorText && variant === 'error' && (
      <div className="flex text-red-700">
        <ErrorIcon className="size-5 mr-1" />
        <span className="text-lg font-bold">{errorText}</span>
      </div>
    )

    return (
      <div className={cn('flex flex-col py-2', classNameWrapper)}>
        {/* TODO to be updated after */}
        <input type="text" ref={ref} hidden />
        <div
          onPaste={handlePaste}
          className={cn(
            'w-full flex items-center justify-center gap-x-2.5',
            className
          )}>
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              maxLength={1}
              disabled={disabled}
              className={defaultCn}
              autoFocus={index === 0}
              onChange={handleChange(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              {...props}
            />
          ))}
        </div>
        {errorBlock}
      </div>
    )
  }
)
