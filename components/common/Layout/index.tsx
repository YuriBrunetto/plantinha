import { MainStyled, CommonLimiter } from './styles'
import Footer from '../Footer'

const Layout: React.FC = ({ children }) => (
  <>
    <MainStyled>
      <CommonLimiter>{children}</CommonLimiter>
    </MainStyled>
    <Footer />
  </>
)

export default Layout
