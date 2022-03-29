import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Questions, Progression, SolveKatas, Garden } from './components/index';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const { gamestarted } = useSelector((state) => state.questions);

  return (
    <div className="App">
      {!gamestarted ? (
        <>
        <Progression />
        <Garden />
        <SolveKatas />  
        </>
      ) : (
        <>
        <Progression />
        <Questions />
        </>
      )
      }

    </div>
  );
}

export default App;
