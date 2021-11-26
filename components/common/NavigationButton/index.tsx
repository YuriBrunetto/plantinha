import Link from 'next/link'
import { ReactNode } from 'react'
import { NavigationButtonStyled, NavigationTextStyled } from './styles'

interface Props {
  children: ReactNode
  title: string
  href: string
}

const NavigationButton: React.FC<Props> = ({ children, title, href }) => (
  <Link href={href} passHref>
    <NavigationButtonStyled title={title}>
      {children}
      <NavigationTextStyled>{title}</NavigationTextStyled>
    </NavigationButtonStyled>
  </Link>
)

export default NavigationButton
