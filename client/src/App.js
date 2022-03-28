import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Questions } from './components/index';

function App() {

useEffect(() => {
  fetch('https://penguinproject-server.herokuapp.com/')
    .then(response => response.json())
    .then(response => console.log(response));
}, [])

  return (
    <div className="App">
     <Questions />
    </div>
  );
}

export default App;
