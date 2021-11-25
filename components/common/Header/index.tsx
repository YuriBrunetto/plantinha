import HeaderUser from '../HeaderUser'

import { HeaderStyled, LogoStyled } from './styles'
import Logo from '../../../public/svg/Logo.svg'

const Header: React.FC = () => (
  <HeaderStyled>
    <LogoStyled>
      <Logo />
    </LogoStyled>
    <HeaderUser />
  </HeaderStyled>
)

export default Header
