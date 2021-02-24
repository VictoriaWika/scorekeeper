import styled from 'styled-components/macro'

export default styled.button`
  padding: 4px;
  background: ${props => (props.isActive ? 'tomato' : '#eee')};
  border: 1px solid ${props => (props.isActive ? 'tomato' : '#eee')};
  font-size: inherit;
`
