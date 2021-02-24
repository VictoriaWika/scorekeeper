import styled from 'styled-components'
import Header from './Header'
import Button from './Button'
import Player from './Player'

export default function GamePage({
  nameOfGame,
  players,
  handleMinus,
  handlePlus,
  resetScores,
  endGame,
}) {
  return (
    <GameWrapper>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
        />
      ))}

      <Button onClick={resetScores}>Reset scores</Button>
      <EndGame onClick={endGame}>End game</EndGame>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const EndGame = styled(Button)`
  border: 2px solid tomato;
  background: transparent;
  color: tomato;
`
