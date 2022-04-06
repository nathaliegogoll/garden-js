import React, { useState, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { fetchQuestions } from '../../redux/slices/questionSlice';
import Title from './Title';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: ''})
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('AuthToken')) {
            navigate('/')
        }
    },[navigate])

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])

    const handleChange = (e) => {
        const { name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           await dispatch(login(user)).unwrap();
           navigate('/') 
        } catch (error) {
            setError(`${error}! Please check your credentials`)
            setTimeout(() => {
               setError('')
            }, 3000)
        }
    }

  return (
    <section>
        <Title />
        <p className='title__description'>Adopt a bunny, solve Javascript katas to feed it and grow a beautiful pixel garden</p>
        <form className='login__form' autoComplete="off" onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
            type='email'
            name='email'
            id='email'
            placeholder='enter your email'
            value={user.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input 
            type='password'
            name='password'
            id='password'
            placeholder='enter your password'
            value={user.password}
            onChange={handleChange}
            required
            />
        </div>
        <div className="password-forgotten">
        <Link to='/forgotpassword' >forgot your password ?</Link>
        </div>
        <button type='submit' className='form__submit-btn'>log in</button>
        <div className="login__form-createaccount">
            <p>or</p>
            <div className="login__form-createaccount-link">
            <Link to="/register">create a new account</Link>
            </div>
        </div>
        { error && <span className='login__error-msg'>{error}</span>}
    </form>
</section>
  )
}

export default Login