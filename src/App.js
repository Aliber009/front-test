import logo from './logo.svg';
import './App.css';
import StylishCard from './components/card';
import TitlebarGridList from './components/gridList';
import FetchPlayers from './playerPaginator';

function App() {
  return (
    
    <div className="App">
      <FetchPlayers />
        <TitlebarGridList />
        
        
    
    </div>
  );
}

export default App;
