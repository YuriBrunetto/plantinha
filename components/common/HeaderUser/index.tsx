import Image from 'next/image'
import { HeaderUserStyled, AvatarStyled } from './styles'

const HeaderUser: React.FC = () => (
  <HeaderUserStyled>
    <AvatarStyled>
      <Image
        src='https://yuribrunetto.com.br/_next/image?url=%2Fassets%2Fme.jpg&w=384&q=75'
        width={24}
        height={24}
        alt='Yuri Brunetto'
      />
    </AvatarStyled>
    Yuri Brunetto
  </HeaderUserStyled>
)

export default HeaderUser
