import styled from 'styled-components'

export const NavigationButtonStyled = styled.a`
  flex: 1;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    padding-right: 24px;
  }
  &:last-child {
    padding-left: 24px;
  }
`

export const NavigationTextStyled = styled.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-top: 2px;
`
