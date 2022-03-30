import './App.css';
import { Questions, Progression, SolveKatas, Garden } from './components/index';
import { useSelector } from 'react-redux';
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
