import { css, keyframes } from '@emotion/react'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const spinnerStyle = css`
  height: 4rem;
  width: 4rem;
  animation: ${spin} 1s linear infinite;
  border-radius: 50%;
  border: 4px solid var(--red-800);
  border-top-color: transparent;
  margin: 0 auto;
`

export const Spinner = () => <div aria-hidden css={spinnerStyle} />
