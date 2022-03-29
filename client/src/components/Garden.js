import { Level000, Level001, Level002 } from './index';

const Garden = () => {

    //code that will be in slices

    const lvlDisplay = ( xp, lvl=0 ) => {
        const leftOverXp = xp - (3 + lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }

    const currentLevel = lvlDisplay(12)
    console.log(currentLevel);
    // ------------------------------ //
    //TODO if carrot === 5, sad emote
    //TODO if carrot === 0, happy emote

    return (
        <>
            <section className='garden__container'>
                <p className="garden__username">Pingu</p>
                <Level000 />
                <Level001 />
                <Level002 />
            </section>
        </>
    )
}

export default Garden;