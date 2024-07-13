import { css } from '@emotion/react'

export const pageWrapperStyles = (maxWidth?: string) => css`
  margin: 0 auto;
  width: 100%;
  padding: 40px 15px;
  max-width: ${maxWidth ?? '1280px'};
`
