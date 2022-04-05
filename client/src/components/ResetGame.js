import closeButton from '../resources/close_icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { modifyUser } from '../redux/slices/userSlice';

const ResetGame = ({setter, getter}) => {

  const {user} = useSelector((state) => state.user)

  const dispatch = useDispatch();
    
  const handleClose = async () => {
    await dispatch(modifyUser(user)).unwrap()
    setTimeout(() => {
      setter(false);
    }, 500)
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
