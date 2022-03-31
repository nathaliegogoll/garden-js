import React from 'react'
import Carrots from './Carrots';
import Level from './Level';
import XP from './XP';
import { Logout } from '../index'

const Progression = () => {
    return (
    <section className='progression__container'>
      <section className='top__container'>
        <Carrots />
        <Logout />
      </section>
      <section className='level__container'>
        <Level />
        <XP />
      </section>
    </ section>)
}

export default Progression;