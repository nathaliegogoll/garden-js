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
    console.log('logout')
}
  return (
    <section className='logout'>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default Logout