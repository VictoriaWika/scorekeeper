import styled from 'styled-components/macro'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  const hue = Math.min(score * 10, 120)

  return (
    <PlayerEntry>
      {name}
      <PlayerScore color={`hsl(${hue}, 50%, 50%)`}>
        <Button onClick={onMinus}>➖</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>➕</Button>
      </PlayerScore>
    </PlayerEntry>
  )
}

const PlayerEntry = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScore = styled.div`
  color: ${props => props.color || 'black'};
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
