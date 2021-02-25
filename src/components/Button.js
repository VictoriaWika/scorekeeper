import styled from 'styled-components/macro'

export default styled.button`
  padding-bottom: 6px;
  padding-top: 9px;
  background: ${props => (props.isActive ? '#333' : '#eee')};
  border: 1px solid ${props => (props.isActive ? '#333' : '#eee')};
  color: ${props => (props.isActive ? 'white' : 'black')};
  font-size: inherit;
  text-align: center;
  text-decoration: none;

  &.active {
    background-color: #333;
    color: white;
    border-color: #333;
  }
`
