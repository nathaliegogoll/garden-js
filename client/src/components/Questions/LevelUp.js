import React from 'react'
import closeIcon from '../../resources/close_icon.png';
import carrotIcon from '../../resources/carrot.png';
import { useSelector, useDispatch } from 'react-redux'
import { displayPopup } from '../../redux/slices/userSlice';

const LevelUp = ({setter, getter}) => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const handleClose = () => {
        setter(false)
        dispatch(displayPopup(getter))
    }

  return (
    <section>
        <h2>Congrats, you've just leveled up!</h2>
        <p>Here is a gift for you: </p>
        <img src={carrotIcon} alt='carrot'/>
        <p>Your new level: <span>{user.level}</span></p>
        <button onClick={handleClose}><img src={closeIcon} alt='close message'/></button>
    </section>
  )
}

export default LevelUp