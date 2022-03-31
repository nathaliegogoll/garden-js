import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

const handleLogout = () => {
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