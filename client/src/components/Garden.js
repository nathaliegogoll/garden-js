import { Level000, Level001 } from './index';

const Garden = () => {

    //if carrot === 5, sad emote
    // if carrot === 0, happy emote
    //render level components conditionnaly depending on the user's level info
    //fix the rabbit animation

    return (
        <>
            <section className='garden__container'>
                <p className="garden__username">Pingu</p>
                <Level000 />
                <Level001 />
            </section>
        </>
    )
}

export default Garden;