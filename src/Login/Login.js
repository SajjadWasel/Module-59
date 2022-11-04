import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    if(user){
        navigate('/')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-titile'>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: "red", textAlign: "center"}}>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    
                    <input style={{marginLeft: '4%'}} className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{textAlign: 'center'}}>
                    New to ema john? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;