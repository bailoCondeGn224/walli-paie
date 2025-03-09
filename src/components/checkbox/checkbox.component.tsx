import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cn } from '../../helpers/cn.helper'
import { v4 as uuid } from 'uuid'

/**
 * @todo changer la couleur du label si composant désactivé
 */
export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
}

export const Checkbox = React.forwardRef<
  React.ElementRef<'input'>,
  CheckboxProps
>(({ className, label, ...props }, ref) => {
  const checkboxId = uuid()

  const checkboxEl = (
    <input
      ref={ref}
      id={checkboxId}
      type="checkbox"
      className={cn(
        'h-5 w-5 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-light data-[state=checked]:text-white',
        className
      )}
      {...props}
    />
  )

  if (!label) return checkboxEl

  return (
    <div className="flex items-center">
      {checkboxEl}
      <label
        htmlFor={checkboxId}
        className="ml-3 text-lg text-secondary font-bold cursor-pointer">
        {label}
      </label>
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName
