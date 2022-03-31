import { Questions, Progression, SolveKatas, Garden } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { addXp } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const  Main = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('AuthToken')){
        navigate('/login');
    }
  },[]);

  const { gamestarted } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  const increaseXp = () => {
    dispatch(addXp());
};

  return (
    <div className="Main">
      {!gamestarted ? (
        <>
        <Progression />
        <Garden />
        <button onClick={increaseXp}> INCREASE XP!</button>
        <SolveKatas />  
        </>
      ) : (
        <>
        <Progression />
        <button onClick={increaseXp}> INCREASE XP!</button>
        <Questions />
        </>
      )
      }
      </div>
  );
}

export default Main;
