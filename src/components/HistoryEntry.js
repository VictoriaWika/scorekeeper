import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryWrapper>
      <h2>{nameOfGame}</h2>
      <div>
        {players.map((player, index) => (
          <section key={index}>
            <HistoryScores>
              <span>{player.name}</span>
              <span>{player.score}</span>
            </HistoryScores>
          </section>
        ))}
      </div>
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.section`
  background: #eee;
  width: 90%;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 20px;
`

const HistoryScores = styled.div`
  display: flex;
  justify-content: space-between;
`
