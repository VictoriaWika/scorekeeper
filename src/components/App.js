import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import GamePage from './GamePage'
import HistoryPage from './HistoryPage'
import Navigation from './Navigation'
import CreatePage from './CreatePage'
import { Switch, Route, useHistory } from 'react-router-dom'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <CreatePage onCreateGame={createGame} />
        </Route>
        <Route path="/game">
          <GamePage
            nameOfGame={nameOfGame}
            players={players}
            onMinus={handleMinus}
            onPlus={handlePlus}
            onResetScores={resetScores}
            onEndGame={endGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
      </Switch>
      <Route exact path={['/', '/history']}>
        <Navigation />
      </Route>
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
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
    push('/history')
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
