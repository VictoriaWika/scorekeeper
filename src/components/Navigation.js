import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ pages, activeIndex, onNavigate }) {
  return (
    <Nav>
      {pages.map((page, index) => (
        <Button
          key={page}
          className={
            index === activeIndex
              ? 'Navigation__active'
              : 'Navigation__inactive'
          }
          onClick={() => onNavigate(index)}
        >
          {page}
        </Button>
      ))}
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
/*
.Navigation__active {
  background: hotpink;
}

.Navigation__inactive {
  background: #eee;
}
*/
