import { ReactNode } from 'react'
import { ContainerStyled, TitleWrapper } from './styles'

interface Props {
  children: ReactNode
  title?: string
  description?: string
  date?: string
  marginTop?: boolean
}

const Container: React.FC<Props> = ({
  children,
  title,
  description,
  date,
  marginTop,
}) => (
  <ContainerStyled marginTop={marginTop}>
    {!!title && (
      <TitleWrapper>
        <h2>{title}</h2>
        {!!date && <span className='date'>{date}</span>}
      </TitleWrapper>
    )}
    {!!description && <p>{description}</p>}
    {children}
  </ContainerStyled>
)

export default Container
