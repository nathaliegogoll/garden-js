import React, { useEffect, useState} from 'react';
import spriteGift from '../resources/game_assets/gift.png';

const Test = () => {
    const [xp, setXp] = useState(0);
    const [trueLvl, setTrueLvl] = useState(0);

    const increaseXp = () => {
        setXp(xp +1);
    };
    
    const decreaseXp = () => {
        setXp(xp -1);
    };
    const increaseTrueLvl = () => {
        setTrueLvl(trueLvl +1);
    };
    
    const lvlDisplay = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }
       return (
       <div>
           <div>xp {xp}</div>
           <div>true lvl {trueLvl}</div>
           <div>possible lvl {lvlDisplay(xp)}</div>
       <div >
       <div>
       <button id="btnBonusXp" onClick={increaseXp}>Increase XP</button>
       <button id="btnXpPenalty" onClick={decreaseXp}>Decrease XP</button>
       </div>
       <p>reward</p>
       <div>
           <img className={`garden__reward${(trueLvl < lvlDisplay(xp)) ? '-tester' : ''}`} onClick={increaseTrueLvl} src={spriteGift} alt="chest"/>
       </div>
       </div>
           </div>
           )
        }
        
        export default Test