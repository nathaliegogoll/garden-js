import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateAccount, Login, Main, About } from './components/index';
function App() {
  
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<CreateAccount />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
