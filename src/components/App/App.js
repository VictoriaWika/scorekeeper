import { useState } from 'react'
import AppHeader from '../AppHeader'
import Button from '../Button'
import GameForm from '../GameForm'
import HistoryEntry from '../HistoryEntry'
import Navigation from '../Navigation'
import Player from '../Player'
import PlayerForm from '../PlayerForm'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <AppHeader title={'Carcassonne'} />
      <GameForm />

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
      <Button onClick={resetScores} text="Reset scores" />
      <Button onClick={resetAll} text="Reset all" />
      <Button text="End game" />
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: '20' },
          { name: 'Jane Doe', score: '30' },
        ]}
      />
      <Navigation
        onNavigate={index => console.log(index)}
        activeIndex={0}
        pages={['Play', 'History']}
      />
    </div>
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

export default App
