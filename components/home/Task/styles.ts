import styled from 'styled-components'

interface TaskProps {
  type: 'water' | 'fertilize'
}

export const TaskStyled = styled.div<TaskProps>`
  height: 54px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === 'water' ? 'var(--blue)' : 'var(--green)'};
  padding: 0 8px 0 20px;
  align-items: center;
  display: flex;

  &:not(:first-child) {
    margin-top: 4px;
  }
`

export const TaskTitle = styled.span`
  color: #fff;
  font-size: 16px;
  margin-left: 12px;
`

export const TaskImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-left: auto;
  overflow: hidden;
  border: 1px solid #fff;
`
