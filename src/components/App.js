import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <StyledApp>
      <PlayerForm onAddPlayer={addPlayer} text={'Add Player:'} />
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onMinus={() => onMinus(index)}
          onPlus={() => onPlus(index)}
        />
      ))}
      <Buttongrid>
        <Button onClick={resetScores}>Reset scores</Button>
        <ResetButton onClick={resetAll}>Reset all</ResetButton>
      </Buttongrid>
    </StyledApp>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.lenght + 1 }])
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
