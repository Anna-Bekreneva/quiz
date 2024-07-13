'use client'

import { Categories } from '@/feature/categories/categories'
import { getLayout } from '@/shared/ui/layouts/layout'
import { Header } from '@/widgets/header/header'
import { PageWrapper } from '@/widgets/page-wrapper/page-wrapper'

const Page = () => {
  return (
    <PageWrapper
      description={'You can choose a topic that interests you and answer questions about it'}
      title={'All categories | Quiz'}
    >
      <Header actionText={'Get random quiz'} title={'Choose a topic'} />
      <Categories />
    </PageWrapper>
  )
}

Page.getLayout = getLayout
export default Page
