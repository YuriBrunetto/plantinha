import { ReactNode } from 'react'
import { ContainerStyled } from './styles'

interface Props {
  marginTop?: boolean
  children: ReactNode
}

const Container: React.FC<Props> = ({ marginTop, children }) => (
  <ContainerStyled marginTop={marginTop}>{children}</ContainerStyled>
)

export default Container
