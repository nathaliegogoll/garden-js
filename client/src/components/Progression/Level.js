import React from 'react';
import { useSelector } from 'react-redux';

const Level = () => {
    const { user } = useSelector((state) => state.user);
    console.log("level: " + user.level);
    console.log("xp: " + user.xp);
    return (
    <>
        <p className="level__level">LV: {user.level}</p>
    </>)
}

export default Level; 