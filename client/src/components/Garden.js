import sprite0 from '../resources/level_000/bunny.png';
import sprite1 from '../resources/level_001/background.gif';
import sprite2 from '../resources/level_002/pumpkin.png';

const Garden = () => {

    //code that will be in slices

    const lvlDisplay = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }

    const currentLevel = (xp) => {
        const nb = [];
        for (let i = 0; i < lvlDisplay(xp); i++) {
            nb.push(i);
        }
        return nb
    }
    // ------------------------------ //
    //TODO if carrot === 5, sad emote
    //TODO if carrot === 0, happy emote
    const sprites = [sprite0, sprite1, sprite2];
    return (
        <>
            <section className='garden__container'>
                <p className="garden__username" >Pingu</p>
                {
                    currentLevel(12).map(nb => {
                        const sprite = sprites[nb]
                        return (<div className={`garden--level${nb}`} style={{"background": `url(${sprite})`}}></div>)
                    })
                }
                
              
            </section>
        </>
    )
}

export default Garden;