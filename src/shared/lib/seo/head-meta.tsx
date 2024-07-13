import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  description?: string
  favicon?: string
  title?: string
}

export const HeadMeta = ({
  description = 'Improve your erudition',
  favicon = '/favicon.png',
  title = 'Quiz',
}: Props) => {
  const { asPath } = useRouter()

  const currentUrl = `${process.env.APP_URL}${asPath}`

  return (
    <Head>
      <title itemProp={'headline'}>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={favicon} rel={'icon'} />
      <link href={currentUrl} rel={'canonical'} />
      <meta content={'ru'} property={'og:locale'} />
      <meta content={title} property={'og:title'} />
      <meta content={currentUrl} property={'og:url'} />
      <meta content={favicon} property={'og:image'} />
      <meta content={description} property={'og:description'} />
    </Head>
  )
}
