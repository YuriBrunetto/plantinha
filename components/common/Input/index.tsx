import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FieldStyled, LabelStyled, InputStyled } from './styles'

interface Props {
  name: string
  placeholder: string
  value: string
  type: string
  setValue: (e: string | ChangeEvent<any>) => void
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
      id={name}
      name={name}
      type={type}
      placeholder={name === 'password' ? '******' : placeholder}
      value={value}
      onChange={setValue}
      required={required}
    />
    <LabelStyled htmlFor={name}>{placeholder}</LabelStyled>
  </FieldStyled>
)

export default Input
