import styled from 'styled-components/macro'

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

const Input = styled.input`
  border: 2px solid #bbb;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  margin: 5px 0;
`
