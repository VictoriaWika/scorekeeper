import GameForm from './GameForm'

export default function CreatePage({ onCreateGame }) {
  return (
    <div>
      <GameForm onCreateGame={onCreateGame} />
    </div>
  )
}
