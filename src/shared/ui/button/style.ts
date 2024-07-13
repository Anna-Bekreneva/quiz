import { ButtonVariant } from '@/shared/ui/button/button'
import { css } from '@emotion/react'

export const buttonStyle = (variant: ButtonVariant) => css`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  background-color: ${variant === 'primary' ? 'var(--red-800)' : 'transparent'};
  border: ${variant === 'secondary' ? '1px solid #8c3535' : 'none'};
  border-radius: 4px;
  color: ${variant === 'secondary' ? 'var(--dark-800)' : 'var(--white)'};
`
