import { Dispatch, SetStateAction } from 'react'
import { FieldStyled, LabelStyled, InputStyled } from './styles'

interface Props {
  name: string
  placeholder: string
  value: string
  type: string
  setValue: Dispatch<SetStateAction<string>>
  required?: boolean
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  type = 'text',
  value,
  setValue,
  required,
}) => (
  <FieldStyled>
    <InputStyled
      name={name}
      type={type}
      placeholder={name === 'password' ? '******' : placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required={required}
    />
    <LabelStyled htmlFor={name}>{placeholder}</LabelStyled>
  </FieldStyled>
)

export default Input
