import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <StyledApp>
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
        />
      ))}
      <Buttongrid>
        <Button onClick={resetScores}>Reset scores</Button>
        <ResetButton onClick={resetAll}>Reset all</ResetButton>
      </Buttongrid>
    </StyledApp>
  )

  function handleAddPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.lenght + 1 }])
  }

  function handleMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }
}

const StyledApp = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const ResetButton = styled(Button)`
  background: white;
  color: tomato;
  border: 1px solid tomato;
`

const Buttongrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
