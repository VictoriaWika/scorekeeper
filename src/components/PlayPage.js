import GameForm from './GameForm'

export default function PlayPage({ createGame }) {
  return (
    <div>
      <GameForm onCreateGame={createGame} />
    </div>
  )
}
