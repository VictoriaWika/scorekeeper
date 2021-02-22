import './Player.css'

export default function Player({name, score, onMinus, onPlus}) {
    return (
        <section className='Player'>
            {name}
            <div className="Player__score">
                <button onClick={onMinus}>➖</button>
                    <span>{score}</span>
                <button onClick={onPlus}>➕</button>
            </div>
        </section>
    )
}