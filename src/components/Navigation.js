import Button from './Button'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav>
      <Button as={NavLink} exact to="/">
        Play
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #eee;
  width: 100%;
`
