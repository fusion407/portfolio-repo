import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="pageBody">
        <Home />
      </div>
    </div>
  );
}

export default App;
