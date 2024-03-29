import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../redux/slices/authSlice';
import { postUser } from '../../redux/slices/userSlice';
import Title from './Title';
import bunny from '../../resources/bunny.png';

import { v4 as uuidv4 } from 'uuid'

const CreateAccount = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '', uuid: ''})
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('AuthToken')) {
            navigate('/')
        }
    },[navigate])

    const handleChange = (e) => {
        const { name, value} = e.target
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        const newId = uuidv4();
        setUser({...user, uuid: newId });
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (user.password !== user.confirmPassword) {
            setUser({ password: '', confirmPassword: ''})
            setTimeout(() => {
               setError('')
            }, 3000)
            return setError('Passwords do not match')
        }

        try {
           await  dispatch(createAccount(user)).unwrap()
           await dispatch(postUser({uuid: user.uuid, username: user.username})).unwrap()
            navigate('/')
        } catch (error) {
            setError(`This E-mail is already have an account!`)
            setTimeout(() => {
               setError('')
            }, 3000)
        }
    }

  return (
    <section className='register__section'>
    <Title />
    <form className='register__form' autoComplete="off" onSubmit={handleSubmit}>
        <h3 className='register__form-title'>New Account<img className="register__form-bunny"src={bunny} alt="bunny icon"/></h3>
        <div className='form-group'>
            <label htmlFor='name'>name of your bunny</label>
            <input 
            type='text'
            name='username'
            id='name'
            placeholder='enter your username'
            value={user.username}
            onChange={handleChange}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>email</label>
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
        <div className='form-group'>
            <label htmlFor='confirmpassword'> confirm password</label>
            <input 
            type='password'
            name='confirmPassword'
            id='confirmpassword'
            placeholder='enter your password'
            value={user.confirmPassword}
            onChange={handleChange}
            required
            />
        </div>
        <button type='submit' className='form__submit-btn'>sign up</button>
        <div className="register__form-login">
            <p>already have an account? </p>
            <div className="register__form-login-link">
             <Link Link to="/login">log in</Link>
             </div>
        </div>
        {error && <span className='register__error-msg'>{error}</span>}
    </form>
</section>
  )
}

export default CreateAccount