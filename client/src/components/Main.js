import { Questions, Progression, SolveKatas, Garden } from './index';
import { useSelector } from 'react-redux';
import Test from './Test';

const  Main = () => {

  const { gamestarted } = useSelector((state) => state.questions);

  return (
    <div className="Main">
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

export default Main;
