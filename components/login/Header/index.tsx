import Logo from '../../../assets/svg/Logo.svg'
import { HeaderStyled } from './styles'

const Header: React.FC = () => (
  <HeaderStyled>
    <Logo />
    <p>Dê mais atenção para suas filhas</p>
  </HeaderStyled>
)

export default Header
