import { ReactNode } from 'react'
import { ContainerStyled, TitleWrapper } from './styles'

interface Props {
  marginTop?: boolean
  children: ReactNode
  title: string
  description: string
  date?: string
}

const Container: React.FC<Props> = ({
  marginTop,
  children,
  title,
  description,
  date,
}) => (
  <ContainerStyled marginTop={marginTop}>
    <TitleWrapper>
      <h2>{title}</h2>
      <span className='date'>{date}</span>
    </TitleWrapper>
    <p>{description}</p>
    {children}
  </ContainerStyled>
)

export default Container
