import closeButton from '../resources/close_icon.png'
const ResetGame = ({setter, getter}) => {
    const handleClose = () => {
        setter(false);
    }
  return (
    <section className="resetgame">
        <h1 className="resetgame__title">Game Over!</h1>
        <p className="resetgame__paragraph">You haven't fed your rabbit in more than a week so it has eaten everything in your garden (even the house if you had one!). You now have to re-grow your garden and your knowledge.</p>
        <button onClick={handleClose} className="resetgame__button"><img src={closeButton} alt="close" /></button>
    </section>
  )
}

export default ResetGame
