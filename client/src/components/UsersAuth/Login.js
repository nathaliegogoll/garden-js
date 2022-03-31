import React, { useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: ''})
    const userData = useSelector((state) => state.userAuth);
    console.log(userData);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user));
        navigate('/') 
    }

  return (
    <section>
    <form className='login__form' onSubmit={handleSubmit}>
        <h3 className='login__form-title'>Garden JS</h3>
        <p className='login__form-text'>Adopt a bunny, solve Javascript katas to feed it and grow a beautiful pixel garden</p>
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
        <Link to='/forgot'>Forgot password ?</Link>
        <button type='submit' className='form__submit-btn'>Login</button>
        <span>Or <Link to="/register">Create a Account</Link></span>
    </form>
</section>
  )
}

export default Login