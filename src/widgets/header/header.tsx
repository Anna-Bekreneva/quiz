'use client'

import { Button } from '@/shared/ui/button/button'
import { headerStyles, titleStyle } from '@/widgets/header/ui/styles'

type Props = {
  actionText: string
  title: string
}
export const Header = ({ actionText, title }: Props) => {
  return (
    <header css={headerStyles}>
      <h1 css={titleStyle}>{title}</h1>
      <div>
        {/*<Button type={'button'}>{actionText}</Button>*/}
        {/*<Button type={'button'}>пропустить</Button>*/}
      </div>
    </header>
  )
}
