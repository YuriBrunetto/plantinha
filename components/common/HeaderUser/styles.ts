import styled from 'styled-components'

export const HeaderUserStyled = styled.div`
  height: 24px;
  background-color: var(--purple);
  padding: 0 8px 0 18px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  position: relative;
`

export const AvatarStyled = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: -12px;
  top: 0;
  overflow: hidden;
`
