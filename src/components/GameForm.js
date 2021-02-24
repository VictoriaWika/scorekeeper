import styled from 'styled-components/macro'
import Button from './Button'
import Input from './Input'

export default function GameForm({ onCreateGame }) {
  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
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

const Form = styled.form`
  display: grid;
  gap: 10px;
`
