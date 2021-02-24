import { useState } from 'react'
import styled from 'styled-components/macro'
import AppHeader from './AppHeader'
import Button from './Button'
import GameForm from './GameForm'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'
import Player from './Player'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])

  return (
    <StyledApp>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}
      {currentPage === 'game' && (
        <GamePage>
          <AppHeader>{nameOfGame}</AppHeader>
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
        </GamePage>
      )}
      {currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </StyledApp>
  )

  function createGame({ nameOfGame, playerNames }) {
    // playerNames is ['Jane', 'John']
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
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

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('play')
  }
}

const StyledApp = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const GamePage = styled.div`
  display: grid;
  gap: 10px;
`
const EndGame = styled(Button)`
  border: 2px solid tomato;
  background: transparent;
  color: tomato;
`

const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`
