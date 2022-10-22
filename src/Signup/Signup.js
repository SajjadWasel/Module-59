import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

import './Signup.css';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailOnBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordOnBlur = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordOnBlur = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefalut();
        if (password !== confirmPassword) {
            setError('Your 2 Password Did Not Matched')
            return;
        }
        if (password.length < 0) {
            setError('Password Must Be longer than 6 characters')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-titile'>Login</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input onBlur={handlePasswordOnBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input onBlur={handleConfirmPasswordOnBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" required value="Sign Up" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;