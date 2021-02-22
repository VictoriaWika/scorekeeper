import Button from '../Button'
import Input from '../Input'
import './GameForm.css'

export default function GameForm() {
  return (
    <form className="GameForm">
      <Input labelText="Name of Game:" placeholderText="e.g. Carcassonne" />
      <Input
        labelText="Player names:"
        placeholderText="e.g. John Doe, Jane Doe"
      />
      <Button text="Create game" />
    </form>
  )
}
