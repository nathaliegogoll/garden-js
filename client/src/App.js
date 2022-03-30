import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Questions, Progression, SolveKatas, Garden } from './components/index';
import { useSelector, useDispatch } from 'react-redux';
import Test from './components/Test';

function App() {

  const { gamestarted } = useSelector((state) => state.questions);

  return (
    <div className="App">
      {!gamestarted ? (
        <>
        <Progression />
        <Garden />
        <Test />
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
