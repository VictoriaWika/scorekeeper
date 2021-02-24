import styled from 'styled-components/macro'
import Input from './Input'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Add player:
        <br />
        <Input name="player" placeholder="Player name" />
      </Label>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Form = styled.form``

const Label = styled.label`
  display: grid;
  gap: 4px;
`
