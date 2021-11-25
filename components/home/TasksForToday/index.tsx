import Task from '../Task'
import { TasksForTodayStyled } from './styles'

import WaterIcon from '../../../assets/svg/WaterIcon.svg'
import FertilizeIcon from '../../../assets/svg/FertilizeIcon.svg'

const TasksForToday: React.FC = () => (
  <TasksForTodayStyled>
    <Task type='water' plantTitle='Samambaia'>
      <WaterIcon />
    </Task>
    <Task type='fertilize' plantTitle='Suculenta'>
      <FertilizeIcon />
    </Task>
  </TasksForTodayStyled>
)

export default TasksForToday
