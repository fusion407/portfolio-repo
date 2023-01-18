import NavBar from './components/NavBar'
import Home from './components/Home'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';
import { Router, Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="pageBody">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/bio' element={<Bio/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
