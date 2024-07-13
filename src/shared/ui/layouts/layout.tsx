import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>
}

export function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
