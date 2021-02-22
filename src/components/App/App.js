import Button from '../Button';
import Player from '../Player';
import PlayerForm from '../PlayerForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerForm 
        onAddPlayer={name => console.log(name)} 
        text={'Add Player:'}
      />
      <Player 
      name='John Doe' 
      score='20' 
      onMinus={() => console.log('Minus')} 
      onPlus={() => console.log('Plus')}
      />
      <Player 
      name='Jane Doe'
      score='30'
      onMinus={() => console.log('Minus')} 
      onPlus={() => console.log('Plus')}
      />
      <Button 
      onClick={() => console.log('Reset scores')} 
      text='Reset scores'
      />
      <Button 
      onClick={() => console.log('Reset all')} 
      text='Reset all'
      />
    </div>
  );
}

export default App;
