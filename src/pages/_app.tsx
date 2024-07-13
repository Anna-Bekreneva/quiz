import type { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'

import { GlobalStyles } from '@/app/styles/global'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

const cache = createCache({ key: 'quiz' })

export default function MyApp({ Component, pageProps }: AppPropsWithLayout & NextPageWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  )
}
