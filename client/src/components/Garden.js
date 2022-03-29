import { useSelector } from 'react-redux';
import sprite0 from '../resources/level_000/bunny.png';
import sprite1 from '../resources/level_001/background.gif';
import sprite2 from '../resources/level_002/pumpkin.png';

const Garden = () => {
    const { carrots } = useSelector((state) => state.questions);
    //code that will be in slices

    const lvlDisplay = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }

    const currentLevel = (xp) => {
        const nb = [0];
        for (let i = 0; i < lvlDisplay(xp); i++) {
            if (i===0) continue;
            nb.push(i);
        }
        return nb
    }
    // ------------------------------ //
    const sprites = [{"happy": sprite0, "sad": sprite0}, sprite1, sprite2];
    return (
        <>
            <section className='garden__container'>
                <p className="garden__username" >Pingu</p>
                {
                    currentLevel(12).map(nb => {
                        const sprite = sprites[nb]
                        if (typeof sprite === "object") {
                            if (carrots === 5) {
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
                
              
            </section>
        </>
    )
}

export default Garden;