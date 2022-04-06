import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleCreateAccount = () => {
        navigate('/register')
    }
  return (
    <section className='forgotPassword'>
       <h3 className='forgotPassword__msg'>We are currently working on this feature. Please create a new account to access a new garden if you have forgotten your password.</h3>
       <button className='forgotPassword__navigate-btn' onClick={handleCreateAccount}>Create a new account</button>
    </section>
  )
}

export default ForgotPassword