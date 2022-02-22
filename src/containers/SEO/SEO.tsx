import Head from 'next/head'

import * as I from './SEO.types'

export const SEO: React.FC<I.SEOProps> = ({ title, description, canonical, ogImage = '/assets/images/default-no-avatar.png' }) => {
  return (
    <Head>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="250" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <title>{title}</title>
    </Head>
  )
}
