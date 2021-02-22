import './Player.css'

export default function Player({name, score, onMinus, onPlus}) {
    return (
        <section className='Player'>
            {name}
            <section>
                <button onClick={onMinus}>➖</button>
                    <span>{score}</span>
                <button onClick={onPlus}>➕</button>
            </section>
        </section>
    )
}