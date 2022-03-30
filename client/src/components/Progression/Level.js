import React from 'react';
import { useSelector } from 'react-redux';

const Level = () => {
    const currentLevel = useSelector((state) => state.user.user.level);
    console.log(currentLevel)
    return (
    <>
        <p className="level__level">LV: {currentLevel}</p>
    </>)
}

export default Level; 