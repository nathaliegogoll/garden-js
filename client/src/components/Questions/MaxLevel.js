import React from 'react'
import closeIcon from '../../resources/close_icon.png';
import { useSelector, useDispatch } from 'react-redux'
import { modifyUser } from '../../redux/slices/userSlice';
import { endGame } from '../../redux/slices/questionSlice';


const MaxLevel = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    
    const handleGoBack = async () => {
      try {
          await dispatch(modifyUser(user)).unwrap()
          dispatch(endGame())
      } catch (error) {
          console.log(error)
      }
  }
 

   // <button className="maxlevel__close"onClick={handleClose}><img className="btn--close" src={closeIcon} alt='close message'/></button>
  return (
    <section className="maxlevel">
        <h2 className="maxlevel__title">Congratulations on reaching the max level!</h2>
        <p className="maxlevel__description">Our developers are coding their socks off making the next levels. We hope you will come back when the next update is launched.</p>
        <p className="maxlevel__thankyou">Thank you for playing our game :)</p>
        <button className="questionnaire__btn-back" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>
    </section>
  )
}

export default MaxLevel