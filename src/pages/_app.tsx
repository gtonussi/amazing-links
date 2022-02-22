import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Analytics } from 'containers'
import { GlobalStyle } from 'styles/global'
import theme from 'styles/theme'
import * as gtag from 'services/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    //https://willianjusten.com.br/como-configurar-o-google-analytics-no-nextjs-em-2021

    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
