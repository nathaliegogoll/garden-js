import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Questions, Progression, SolveKatas, Garden, CreateAccount, Login} from './components/index';
import { useSelector } from 'react-redux';
import Test from './components/Test';

function App() {

  const { gamestarted } = useSelector((state) => state.questions);

  return (
    <Router>
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
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
