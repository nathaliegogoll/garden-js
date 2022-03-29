import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/slices/questionSlice';

const SolveKatas = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startGame())
    }

    return (
    <>
        <button className="solvekatas__btn" onClick={handleClick}>Solve Katas</button>
    </>)
}

export default SolveKatas;