import NavigationButton from '../NavigationButton'
import { NavigationStyled, NavigationWrapper, AddButtonStyled } from './styles'

import HomeIcon from '../../../assets/svg/HomeIcon.svg'
import PlantsIcon from '../../../assets/svg/PlantsIcon.svg'
import PlusIcon from '../../../assets/svg/PlusIcon.svg'

const Navigation: React.FC = () => (
  <NavigationStyled>
    <NavigationWrapper>
      <NavigationButton href='/' title='Início'>
        <HomeIcon />
      </NavigationButton>
      <NavigationButton href='/plantinhas' title='Plantinhas'>
        <PlantsIcon />
      </NavigationButton>
      <AddButtonStyled title='Adicionar plantinha'>
        <PlusIcon />
      </AddButtonStyled>
    </NavigationWrapper>
  </NavigationStyled>
)

export default Navigation
