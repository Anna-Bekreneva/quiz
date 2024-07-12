import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { HeadMeta } from '@/shared/lib/seo/head-meta'

type Props = {
  children: ReactNode
  className?: string
  description?: string
  favicon?: string
  title?: string
} & ComponentPropsWithoutRef<'div'>
export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  title,
  ...rest
}: Props) => {
  return (
    <div className={className} {...rest}>
      <HeadMeta description={description} favicon={favicon} title={title} />
      {children}
    </div>
  )
}
