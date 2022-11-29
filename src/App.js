import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>welcome to the world of React Js</h1>
      <p>Hello React Js</p>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
