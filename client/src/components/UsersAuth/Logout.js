import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { clearQuestions, endGame } from '../../redux/slices/questionSlice'
import { modifyUser } from '../../redux/slices/userSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

const handleLogout = async () => {
    try {
      await dispatch(modifyUser(user)).unwrap()
      dispatch(endGame())
    } catch (error) {
      console.log(error)
    }
    dispatch(clearQuestions())
    dispatch(endGame())
    dispatch(logout())
    navigate('/login')
}
  return (
    <section className='logout'>
        <button className='logout-btn' onClick={handleLogout}>logout</button>
    </section>
  )
}

export default Logout