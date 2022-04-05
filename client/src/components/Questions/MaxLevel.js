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
    <section className="MaxLevel">
        <h2 className="MaxLevel__title">Congratulations on reaching max lvl</h2>
        <p className="MaxLevel__description">Our developers are coding their socks of making the next lvls. We hope you will come back when the next update is launched</p>
        <h3>Thank you for playing our game</h3>
        <button className="questionnaire__btn-close" onClick={handleGoBack}><img className="btn--close" src={closeIcon} alt="go back button" /></button>
 
    </section>
  )
}

export default MaxLevel