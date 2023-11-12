import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import './Login.css'


function Login(props) {
    return (
        <div className='mainContainer'>
            <div className='loginContainer'>
                <h1>Welcome to <span className='websiteTitle'>Verbose</span></h1>
                <div className='emailContainer'>
                    <Form.Control
                    id='emailInput'
                    aria-label="Username"
                    placeholder='Email'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <div className='passwordContainer'>
                    <Form.Control
                    id='passwordInput'
                    placeholder="Password"
                    aria-label="Password"
                    type='password'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <div className='forgotPassword'>Forgot password?</div>
                <Button className='loginButton' variant="outline-warning">
                    Login
                </Button>
                <div className='noAccount'>Don't have an account yet? <div className='signUp'>Sign Up</div></div>
            </div>
        </div>
    );
}

export default Login;