import React from 'react'
import Carrots from './Carrots';
import Level from './Level';
import XP from './XP';

const Progression = () => {
    return (
    <section className='progression__container'>
      <section className='top__container'>
        <Carrots />
        <p>Hamburger-menu</p>
      </section>
      <section className='level__container'>
        <Level />
        <XP />
      </section>
    </ section>)
}

export default Progression;