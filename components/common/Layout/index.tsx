import { ReactNode } from 'react'
import { NextRouter, useRouter } from 'next/router'

import { MainStyled, CommonLimiter } from './styles'
import Footer from '../Footer'
import Header from '../Header'

interface Props {
  align?: string
  children: ReactNode
}

const Layout: React.FC<Props> = ({ align = 'flex-start', children }) => {
  const router: NextRouter = useRouter()

  return (
    <>
      {router.asPath !== '/login' && <Header />}
      <MainStyled align={align}>
        <CommonLimiter>{children}</CommonLimiter>
      </MainStyled>
      <Footer />
    </>
  )
}

export default Layout
