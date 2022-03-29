import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import carrotPng from "../../resources/carrot.png";


const Carrots = () => {
    const { carrots } = useSelector((state) => state.questions);

    return (
    <>
        <section className="progression__container">
        {[...Array(carrots)].map((e, index) => {
            return (
                <div key={index}>
                    <img className="progression__carrot" src={carrotPng} alt="carrot"/>
                </div>
            )
        })}
        </section>
    </>)
}

export default Carrots;