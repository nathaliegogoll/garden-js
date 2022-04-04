import { Questions, Progression, SolveKatas, Garden } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { addXp, addLevel, resetCarrots } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { lvlDisplay } from './helpers';

const  Main = () => {

  const { user } = useSelector((state) => state.user)
  const { authData } = useSelector((state) => state.userAuth)

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('AuthToken')){
        navigate('/login');
    }
  },[]);

  useEffect(() => {
  if (user.lastConnected !== undefined) {
    if (user.carrotNumber < 5) {
      const lastCon = user.lastConnected.toString().slice(0, 10); 
      const today = new Date()
      const todayFormatted = today.toISOString().slice(0, 10);
      if (lastCon !== todayFormatted) {
       dispatch(resetCarrots())
      }
    }
    const date = new Date(user.lastConnected);
    const today = new Date();
    const diff = today.getTime() - date.getTime();
    if( (diff / (8.64 * 10 ** +7)) > 7){
      console.log('Rabbit is KILL');
    }
  }}, [user]) 

  const { gamestarted } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  const increaseXp = () => {
    dispatch(addXp());
    dispatch(addLevel(lvlDisplay(user.xp)-1))
};

  const resetCarrotsNumber = () => {
    dispatch(resetCarrots())
  }

  return (
    <div className="Main">
      {!gamestarted ? (
        <>
        <Progression />
        <Garden />
        <div className = "container__buttons">
        <SolveKatas />
        <div className="dev__mode">
          <p>super secret dev mode buttons</p>
          <button onClick={increaseXp}> INCREASE XP!</button>
          <button onClick={resetCarrotsNumber}> RESET CARROT! </button>
        </div>
        </div>
        <nav className='navigation'>
          <Link to='/about'>About us</Link>
        </nav>
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

export default Main;
