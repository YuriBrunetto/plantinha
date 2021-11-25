import NavigationButton from '../NavigationButton'
import { NavigationStyled, NavigationWrapper, AddButtonStyled } from './styles'

import HomeIcon from '../../../public/svg/HomeIcon.svg'
import PlantsIcon from '../../../public/svg/PlantsIcon.svg'
import PlusIcon from '../../../public/svg/PlusIcon.svg'

const Navigation: React.FC = () => (
  <NavigationStyled>
    <NavigationWrapper>
      <NavigationButton title='Início'>
        <HomeIcon />
      </NavigationButton>
      <NavigationButton title='Plantinhas'>
        <PlantsIcon />
      </NavigationButton>
      <AddButtonStyled title='Adicionar plantinha'>
        <PlusIcon />
      </AddButtonStyled>
    </NavigationWrapper>
  </NavigationStyled>
)

export default Navigation
