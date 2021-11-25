import { ReactNode } from 'react'
import { ContainerStyled } from './styles'

interface Props {
  marginTop?: boolean
  children: ReactNode
  title: string
  description: string
}

const Container: React.FC<Props> = ({
  marginTop,
  children,
  title,
  description,
}) => (
  <ContainerStyled marginTop={marginTop}>
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
  </ContainerStyled>
)

export default Container
