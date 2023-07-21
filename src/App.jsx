import logo from './logo.svg';
import './App.css';
import Image1 from './Images/1.jpg';
import Image2 from './Images//13.jpg';
import About from './Components/About';
import Education from './Components/Education';
import Career from './Components/Career';

function Name() {
  console.log('Hello from Component, I am the child of this page')
  return (
    <div>
      <h1 style={{ background: '#C5BAC4', textAlign: 'center' }}>This is Mais Mohammed from component calling</h1>
    </div>
  )
}

function Image() {
  return (
    <div>
      <img src={Image1} style={{ display: 'block', margin: '0 auto' }} />
    </div>
  )
}

let count = 0;

function Button() {
  return (console.log('The button clicked', count++, 'times'));
}

function App() {
  console.log('Hello from main page, I am the parent of this page')

  return (

    <div style={{ backgroundColor: '#989DAA', width: '100vw', minHeight: '100vh' }}>

      <div>
        <h1 style={{ background: '#7B919c', textAlign: 'center' }}>This is Mais Mohammed tag from the main page</h1>
        <img src={Image2} style={{ display: 'block', margin: '0 auto' }} />
      </div>

      <Name />
      <Image />
      <About />
      <Education />
      <Career />

      <div>
        <button onClick={Button} style={{ backgroundColor: '#57707A', display: 'block', margin: '0 auto' }}>Click on</button>
      </div>

    </div>
  );
}

export default App;

