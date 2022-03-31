import React, { useState} from 'react';

import spriteGift from '../resources/game_assets/gift.png';

const Test = () => {
    
    const [trueLvl, setTrueLvl] = useState(0);


    const increaseTrueLvl = () => {
        setTrueLvl(trueLvl +1);
    };
    const xp = 0
    const lvlDisplayOld = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }
    // const lvlDisplay = ( xp, lvl=0 ) => {
    //     let leftOverXp = ( xp > 3) ? xp -= 5 : xp -= 3;
    //     return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    // }

    const lvlDisplay = ( xp, lvl=1 ) => {
        let leftOverXp = xp -= 3;
        /*if(xp === 3){
            console.log("here")
            console.log(xp);
            console.log(lvl);
            return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
        }*/
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }
       return (
       <div>
           <div>xp {xp}</div>
           <div>true lvl {trueLvl}</div>
           <div>possible lvl {lvlDisplay(xp)}</div>
       <div >
       
       <p>reward</p>
       <div>
           <img className={`garden__reward${(trueLvl < lvlDisplay(xp)) ? '-tester' : ''}`} onClick={increaseTrueLvl} src={spriteGift} alt="chest"/>
       </div>
       </div>
           </div>
           )
        }
        
        export default Test