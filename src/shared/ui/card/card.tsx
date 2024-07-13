'use client'

import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { cardStyle } from '@/shared/ui/card/style'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const CardPolymorph = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>,
  ref: ElementRef<T>
) => {
  const { as: Tag = 'div', ...rest } = props

  return <Tag css={cardStyle} ref={ref} {...rest} />
}

export const Card = forwardRef(CardPolymorph) as <T extends ElementType = 'div'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & CardProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => ReturnType<typeof CardPolymorph>
