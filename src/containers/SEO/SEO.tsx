import Head from 'next/head'

import * as I from './SEO.types'

export const SEO: React.FC<I.SEOProps> = ({ title, description, canonical }) => {
  return (
    <Head>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  )
}
