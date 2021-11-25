import styled from 'styled-components'

interface ContainerProps {
  marginTop?: boolean
}

export const ContainerStyled = styled.div<ContainerProps>`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
  margin-top: ${(props) => (props.marginTop ? '20px' : '0')};

  h2 {
    font-size: 20px;
  }

  p {
    color: #6b7280;
    font-size: 14px;
    margin-top: 8px;
  }
`
