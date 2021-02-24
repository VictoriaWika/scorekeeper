import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryWrapper>
      <GameEntry>{nameOfGame}</GameEntry>
      {players.map((player, index) => (
        <section key={index}>
          <HistoryScores>
            <PlayerEntry>{player.name}</PlayerEntry>
            <PlayerEntry>{player.score}</PlayerEntry>
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

const GameEntry = styled.div`
  background: #eee;
  padding: 5px;
`

const PlayerEntry = styled.div`
  padding: 0 5px;
`
