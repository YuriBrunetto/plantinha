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

  .date {
    font-size: 11px;
    background-color: var(--purple);
    color: #fff;
    margin-left: 8px;
    font-weight: 500;
    padding: 4px 6px;
    border-radius: 5px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
