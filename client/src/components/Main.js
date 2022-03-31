import { Questions, Progression, SolveKatas, Garden } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { addXp } from '../redux/slices/userSlice';
import Test from './Test';

const  Main = () => {

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
