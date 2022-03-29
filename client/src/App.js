import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Questions, Progression, SolveKatas, Garden, CreateAccount, Login} from './components/index';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const { gamestarted } = useSelector((state) => state.questions);

  return (
    <Router>
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
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
