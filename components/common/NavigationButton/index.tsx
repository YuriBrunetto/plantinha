import Link from 'next/link'
import { ReactNode } from 'react'
import { NavigationButtonStyled, NavigationTextStyled } from './styles'

interface Props {
  children: ReactNode
  title: string
}

const NavigationButton: React.FC<Props> = ({ children, title }) => (
  <Link href='/' passHref>
    <NavigationButtonStyled title={title}>
      {children}
      <NavigationTextStyled>{title}</NavigationTextStyled>
    </NavigationButtonStyled>
  </Link>
)

export default NavigationButton
