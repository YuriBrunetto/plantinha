import styled from 'styled-components'

interface MainProps {
  align?: string
}

export const MainStyled = styled.main<MainProps>`
  min-height: ${(props) =>
    props.align === 'center' ? 'calc(100vh - 60px)' : 'auto'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.align};
`

export const CommonLimiter = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
