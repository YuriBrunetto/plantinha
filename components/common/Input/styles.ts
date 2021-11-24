import styled from 'styled-components'

export const FieldStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

export const LabelStyled = styled.label`
  position: absolute;
  font-size: 12px;
  padding: 2px 4px;
  background-color: #fff;
  color: var(--lightText);
  top: -8px;
  left: 8px;
  transition: color 0.3s;
`

export const InputStyled = styled.input`
  height: 54px;
  border: 2px solid var(--grey);
  border-radius: 5px;
  font-size: 16px;
  padding: 0 16px;
  outline: 0;
  color: var(--lightText);
  transition: 0.3s;

  &::placeholder {
    color: var(--lightText);
  }

  &:focus {
    border-color: var(--purple);
    color: var(--purple);
  }

  &:focus + label {
    color: var(--purple);
  }
`
