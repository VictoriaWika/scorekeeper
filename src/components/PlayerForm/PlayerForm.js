import './PlayerForm.css'

export default function PlayerForm({text, onAddPlayer}) {
    return (
        <form onSubmit={handleSubmit} className='PlayerForm'>
            <label>
                {text}
                <input name="player" placeholder="Player name"/>
            </label>
        </form>
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