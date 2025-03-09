import * as PrimitiveDialog from '@radix-ui/react-dialog'
import { cn } from '../../helpers/cn.helper'
import { JSX } from 'react'
import { CloseIcon } from '../../assets/icons'

export interface DialogProps extends PrimitiveDialog.DialogProps {
  trigger?: JSX.Element
  className?: string
}

export function Dialog({
  className,
  children,
  trigger,
  ...restProps
}: DialogProps) {
  return (
    <PrimitiveDialog.Root {...restProps}>
      {trigger && (
        <PrimitiveDialog.Trigger asChild>{trigger}</PrimitiveDialog.Trigger>
      )}
      <PrimitiveDialog.Portal>
        <PrimitiveDialog.Overlay className="fixed inset-0 backdrop-blur-sm bg-black/30" />
        <PrimitiveDialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-7 rounded-lg shadow',
            className
          )}>
          {children}
        </PrimitiveDialog.Content>
      </PrimitiveDialog.Portal>
    </PrimitiveDialog.Root>
  )
}

function CloseButton() {
  return (
    <PrimitiveDialog.Close className="text-3xl rounded-full hover:bg-gray-200">
      <CloseIcon />
    </PrimitiveDialog.Close>
  )
}

Dialog.Title = PrimitiveDialog.Title
Dialog.Close = PrimitiveDialog.Close
Dialog.CloseButton = CloseButton
Dialog.Description = PrimitiveDialog.Description
