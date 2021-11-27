import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '../styles/global.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
