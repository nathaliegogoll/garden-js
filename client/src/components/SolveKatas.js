import { useDispatch } from 'react-redux';
import { startGame } from '../redux/slices/questionSlice';
import carrotIcon from '../resources/carrot.png'

const SolveKatas = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startGame())
    }

    return (
    <>
        <button className="solvekatas__btn" onClick={handleClick}>Solve Katas (1 <img src={carrotIcon} alt="carrot" />)</button>
    </>)
}

export default SolveKatas;