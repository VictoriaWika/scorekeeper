import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryWrapper>
      {nameOfGame}
      {players.map((player, index) => (
        <section key={index}>
          <HistoryScores>
            <span>{player.name}</span>
            <span>{player.score}</span>
          </HistoryScores>
        </section>
      ))}
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.section`
  display: grid;
  gap: 10px;
`

const HistoryScores = styled.div`
  display: flex;
  justify-content: space-between;
`
