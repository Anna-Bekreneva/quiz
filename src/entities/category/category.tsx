'use client'

import { css } from '@emotion/react'

type Props = {
  count: string
  title: string
}

const categoryStyle = css`
  width: 100%;
  height: 100%;
  border: 1px solid #8c3535;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const Category = ({ count, title }: Props) => {
  return (
    <article css={categoryStyle}>
      <span>{title}</span>
      <span>{count}</span>
    </article>
  )
}
