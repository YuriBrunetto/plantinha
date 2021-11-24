import { ButtonStyled } from './styles'

interface Props {
  type: 'button' | 'submit'
  text: string
}

const Button: React.FC<Props> = ({ type = 'button', text }) => (
  <ButtonStyled type={type}>{text}</ButtonStyled>
)

export default Button
