import { useState } from 'react';
import Button from '../Button';
import Player from '../Player';
import PlayerForm from '../PlayerForm';
import './App.css';

function App() {
const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm 
        onAddPlayer={addPlayer} 
        text={'Add Player:'}
      />
      {players.map(({ name, score, id }, index) => (
        <Player 
        key={id}
        name={name} 
        score={score} 
        onMinus={() => onMinus(index)} 
        onPlus={() => onPlus(index)}
        />
      ))}
      <Button 
      onClick={resetScores} 
      text='Reset scores'
      />
      <Button 
      onClick={resetAll} 
      text='Reset all'
      />
    </div>
  )

function onPlus(index) {
  setPlayers(players => [
    ...players.slice(0, index),
    {...players[index], score: players[index].score + 1},
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
setPlayers([...players, {name, score: 0, id: players.lenght +1}])
}

function resetScores() {
  setPlayers(players.map(player => ({ ...player, score: 0 })))
}

function resetAll() {
  setPlayers([])
}

}

export default App;
