'use client'

import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { buttonStyle } from '@/shared/ui/button/style'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps<T extends ElementType> = {
  as?: T
  disabled?: boolean
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>
const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ElementRef<T>
) => {
  const { as: Tag = 'button', fullWidth, variant, ...rest } = props

  return (
    // @ts-expect-error TS2322
    <Tag css={buttonStyle(variant ?? 'primary')} disabled={props.disabled} ref={ref} {...rest} />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>
