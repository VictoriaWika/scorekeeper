import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ activeIndex, onNavigate }) {
  return (
    <Nav>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
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
