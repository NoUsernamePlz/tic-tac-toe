
import './App.css';
import Game from './components/Game';
import bg from "./assets/tictacbg.jpg"

function App() {
  return (
    <div className="" style={{ backgroundImage: `url(${bg})` }}>
      <Game/>
    </div>
  );
}

export default App;
