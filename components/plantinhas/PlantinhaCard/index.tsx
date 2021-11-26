import Image from 'next/image'
import {
  PlantinhaCardStyled,
  PlantinhaImage,
  PlantinhaSubtitle,
  PlantinhaTitle,
} from './styles'
import plantExample from '../../../assets/img/plant-example.jpg'

const PlantinhaCard: React.FC = () => (
  <PlantinhaCardStyled>
    <PlantinhaImage>
      <Image width={163} height={200} src={plantExample} alt='Nome da planta' />
    </PlantinhaImage>
    <PlantinhaTitle>Suculenta</PlantinhaTitle>
    <PlantinhaSubtitle>Crassulata ovata</PlantinhaSubtitle>
  </PlantinhaCardStyled>
)

export default PlantinhaCard
