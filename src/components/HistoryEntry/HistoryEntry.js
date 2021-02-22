import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <h2>{nameOfGame}</h2>
      <div>
        {players.map((player, index) => (
          <section key={index}>
            <div className="HistoryEntry__scores">
              <span>{player.name}</span>
              <span>{player.score}</span>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
