import React from 'react'
import { useSelector } from 'react-redux';
import carrotPng from "../../resources/carrot.png";
import carrotEmpty from "../../resources/carrot_nomore.png";


const Carrots = () => {
    const carrots = useSelector((state) => state.user.user.carrotNumber);
   // const carrotsArray = ;
    return (
    <>
        <section className="carrot__container">
        {[...Array(carrots)].length !== 0 ? (
            [...Array(carrots)].map((e, index) => {
                return ( 
                    <div key={index}>
                        <img className="carrot" src={carrotPng} alt="carrot"/>
                    </div>
                )
            })
        ) : (
            <div>
                <img className="carrot" src={carrotEmpty} alt="carrot"/>
                <p className="carrot__empty">no more carrots for today</p>
            </div>
        )}
        </section>
    </>)
}

export default Carrots;