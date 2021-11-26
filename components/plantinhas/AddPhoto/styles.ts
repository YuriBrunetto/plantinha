import styled from 'styled-components'

export const AddPhotoWrapper = styled.div`
  margin-top: 20px;

  input[type='file'] {
    display: none;
  }
`

export const PreviewStyled = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0;

  img {
    width: 100%;
  }
`

export const AddPhotoStyled = styled.label`
  height: 54px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--text);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`
