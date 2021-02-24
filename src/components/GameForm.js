import Button from './Button'
import Input from './Input'

export default function GameForm(onCreateGame) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of Game:"
        placeholderText="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player names:"
        placeholderText="e.g. John Doe, Jane Doe"
      />
      <Button>Create Game</Button>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}

/*
.GameForm input {
  margin: 5px 0;
  border: 2px solid #bbb;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
}
 */
