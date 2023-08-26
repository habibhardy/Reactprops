import './App.css';
import { Card } from 'react-bootstrap';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
         <h1>Football Players</h1>
          <PlayersList />
    </div>
  );
}

export default App;
