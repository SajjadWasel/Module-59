import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-titile'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <button className="form-submit">Login</button>
                    </div>
                </form>
                <p style={{textAlign: 'center'}}>
                    New to ema john? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;