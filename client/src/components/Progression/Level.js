import React from 'react';
import { useSelector } from 'react-redux';

const Level = () => {
    const currentLevel = useSelector((state) => state.user.user.level);
    // const currentLevel = 100;
    console.log(currentLevel)
    return (
    <>
        <p>LV: {currentLevel}</p>
    </>)
}

export default Level;