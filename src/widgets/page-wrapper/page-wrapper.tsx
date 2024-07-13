'use client'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { HeadMeta } from '@/shared/lib/seo/head-meta'
import { pageWrapperStyles } from '@/widgets/page-wrapper/ui/styles'

type Props = {
  children: ReactNode
  description?: string
  favicon?: string
  maxWidth?: string
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  description,
  favicon,
  maxWidth,
  title,
  ...rest
}: Props) => {
  return (
    <section css={pageWrapperStyles(maxWidth)} {...rest}>
      <HeadMeta description={description} favicon={favicon} title={title} />
      {children}
    </section>
  )
}
