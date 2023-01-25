import NavBar from './components/NavBar'
import Home from './components/Home'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { SpectrumVisualizer, SpectrumVisualizerTheme  } from 'react-audio-visualizers';
import song from './strobe.mp3'


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
      <div className="visualizer">
        <SpectrumVisualizer
            audio={song}
            theme={SpectrumVisualizerTheme.radialSquaredBars}
            colors={['#26a25c', '#26a69a']}
            iconsColor="white"
            backgroundColor="#282c34"
            showMainActionIcon
            showLoaderIcon
            // mirror
            radius={50}
            numBars={400}
            // barMargin={0.02}
            barWidth={5}
            lowFrequency={2}
            highFrequency={1000}
            // startingAngle={90}
            // refreshRate={0.030}
            fftSize={1024}
          />
          
      </div>

    </div>
  );
}

export default App;
