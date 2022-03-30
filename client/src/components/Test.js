import React, { useState} from 'react';

import spriteGift from '../resources/game_assets/gift.png';

const Test = () => {
    
    const [trueLvl, setTrueLvl] = useState(0);


    const increaseTrueLvl = () => {
        setTrueLvl(trueLvl +1);
    };
    const xp = 0
    const lvlDisplay = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }
    const lvlDisplay3 = ( xp, lvl=0 ) => {
        let leftOverXp;
        if ( xp > 3) {
            leftOverXp = xp - 1;        
        }
        leftOverXp = leftOverXp - 3;
        return ( leftOverXp < 0) ? lvl : lvlDisplay3 (leftOverXp, (lvl + 1));
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