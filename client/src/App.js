import './App.css';
import { Questions, Progression, SolveKatas, Garden } from './components/index';
import { useSelector } from 'react-redux';

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
