import type { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps
export default function MyApp({ Component, pageProps }: AppPropsWithLayout & NextPageWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
