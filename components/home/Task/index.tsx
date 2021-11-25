import { ReactNode } from 'react'
import Image from 'next/image'

import plantExample from '../../../assets/img/plant-example.jpg'
import { TaskImage, TaskStyled, TaskTitle } from './styles'

interface Props {
  plantTitle: string
  children: ReactNode
  type: 'water' | 'fertilize'
}

const Task: React.FC<Props> = ({ plantTitle, children, type }) => {
  const handleTitle = (type: string): string => {
    switch (type) {
      case 'water':
        return 'Regar'
      case 'fertilize':
        return 'Adubar'
      default:
        return ''
    }
  }

  return (
    <TaskStyled type={type}>
      {children}
      <TaskTitle>
        {handleTitle(type)} <strong>{plantTitle}</strong>
      </TaskTitle>
      <TaskImage>
        <Image width={40} height={40} src={plantExample} alt={plantTitle} />
      </TaskImage>
    </TaskStyled>
  )
}

export default Task
