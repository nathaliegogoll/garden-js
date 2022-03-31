import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUuid, fetchUser, modifyUser, addXp } from '../redux/slices/userSlice';
import { lvlDisplay } from './helpers';

// import sprite0happy from '../resources/level_000/happybunny.png';
import sprite0 from '../resources/level_000/happybunny.png';
import sprite1 from '../resources/level_001/background.gif';
import sprite2 from '../resources/level_002/pumpkin.png';
import sprite3 from '../resources/level_003/carrot.png';
import sprite4 from '../resources/level_004/corn.png';
import sprite5 from '../resources/level_005/cabbage.png';
import sprite6 from '../resources/level_006/tomat.png';
import sprite7 from '../resources/level_007/watermelon.png';

const Garden = () => {
    const { carrots } = useSelector((state) => state.questions);
    const { user, loading } = useSelector((state) => state.user);
    //code that will be in slices
    const dispatch = useDispatch(); 

    useEffect(() => {
        const uuid = localStorage.getItem('uuid');
        dispatch(fetchUser(JSON.parse(uuid)))        
    }, [dispatch])



    const currentLevel = (xp) => {
        const nb = [0];
        for (let i = 0; i < lvlDisplay(xp); i++) {
            if (i===0) continue;
            nb.push(i);
        }
        return nb
    }

    const sprites = [{"happy": sprite0, "sad": sprite0}, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7];
    if (loading) {
        return <p>Loading...</p>
    } else {
    return (
        <>
            <section className='garden__container'>
                <p className="garden__username" >{user.username}</p>
                {
                    currentLevel(user.xp).map(nb => {
                        const sprite = sprites[nb]
                        if (typeof sprite === "object") {
                            if (user.carrotNumber === 5) {
                                return (<div key={nb} className={`garden--level${nb}`} style={{"background": `url(${sprite.sad})`}}></div>)
                            } else {
                                return (<div key={nb} className={`garden--level${nb}`} style={{"background": `url(${sprite.happy})`}}></div>)
                            }
                        }
                        if (sprite === sprite1) {
                            return(
                                <div key={nb} className={`garden--level${nb}`} style={{"background": `url(${sprite}) `, "backgroundSize": "100%"}}></div>
                            )
                        }
                        return (<div key={nb} className={`garden--level${nb}`} style={{"background": `url(${sprite})`}}></div>)
                    })
                }
            <div>
       </div>
              
            </section>
        </>
    )
    }
}

export default Garden;