import styled from 'styled-components'

export const NavigationStyled = styled.nav`
  padding: 32px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const NavigationWrapper = styled.div`
  width: 100%;
  max-width: 335px;
  background-color: var(--purple);
  height: 64px;
  border-radius: 10px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
`

export const AddButtonStyled = styled.a`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--darkPurple);
  position: absolute;
  top: -32px;
  left: calc(50% - 32px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`
