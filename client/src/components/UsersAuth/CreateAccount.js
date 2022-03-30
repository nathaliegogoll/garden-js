import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { createAccount } from '../../redux/slices/authSlice'
import { v4 as uuidv4 } from 'uuid'

const CreateAccount = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: ''})
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const generateId = () => uuidv4();

    const handleChange = (e) => {
        const { name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.password !== user.confirmPassword) {
            setUser({ password: '', confirmPassword: ''})
            setTimeout(() => {
               setError('')
            }, 5000)
            return setError('Passwords do not match')
        }
        dispatch(createAccount(user))
    }

  return (
    <section>
    <form className='register__form' onSubmit={handleSubmit}>
        <h3 className='register__form-title'>Create New Account</h3>
        <div className='form-group'>
            <label htmlFor='name'>Name of your bunny</label>
            <input 
            type='text'
            name='username'
            id='name'
            placeholder='Enter your username'
            value={user.username}
            onChange={handleChange}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={user.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={user.password}
            onChange={handleChange}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='confirmpassword'> Confirm Password</label>
            <input 
            type='password'
            name='confirmPassword'
            id='confirmpassword'
            placeholder='Enter your password'
            value={user.confirmPassword}
            onChange={handleChange}
            required
            />
        </div>
        <button type='submit' className='form__submit-btn'>Sign Up</button>
        <span>Already have an Account <Link to="/login">Login</Link></span>
    </form>
</section>
  )
}

export default CreateAccount