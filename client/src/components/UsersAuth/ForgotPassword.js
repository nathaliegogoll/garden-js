import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleCreateAccount = () => {
        navigate('/register')
    }
  return (
    <section className='forgotPassword'>
       <h3 className='forgotPassword__msg'>We are curentlly working on feature. Please create a new account to access to garden if you forget your password.</h3>
       <button className='forgotPassword__navigate-btn' onClick={handleCreateAccount}>Create a new account</button>
    </section>
  )
}

export default ForgotPassword