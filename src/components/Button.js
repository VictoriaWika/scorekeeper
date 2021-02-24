import styled from 'styled-components/macro'

export default styled.button`
  padding: 4px;
  background: ${props => (props.isActive ? '#333' : '#eee')};
  border: 1px solid ${props => (props.isActive ? '#333' : '#eee')};
  color: ${props => (props.isActive ? 'white' : 'black')};
  font-size: inherit;
`
