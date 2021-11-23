import { FooterStyled } from './styles'

const Footer: React.FC = () => (
  <FooterStyled>
    <strong>&copy; {new Date().getFullYear()}</strong> - feito com 💜 por
    <a href='https://twitter.com/brun3tto' title='@brun3tto'>
      @brun3tto
    </a>{' '}
    e
    <a href='https://twitter.com/lelyveit' title='@lelyveit'>
      @lelyveit
    </a>
  </FooterStyled>
)

export default Footer
