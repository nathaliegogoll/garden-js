import React from 'react';
import { useSelector } from 'react-redux';

const Level = () => {
    const { user } = useSelector((state) => state.user);
    return (
    <>
        <p className="level__level">LV: {user.level}</p>
    </>)
}

export default Level; 