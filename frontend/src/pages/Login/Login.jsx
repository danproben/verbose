import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import './Login.css'
import { supabase } from '../../database';


function Login(props) {

    const navigate = useNavigate();

    const login = async () => {
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;

        try {
            const { user, error } = await supabase.auth.signInWithPassword({
              email: email,
              password: password,
            });
    
            if (error) {
              console.error('Login error:', error);
            } else {
              console.log('Logged in as:', user);
              navigate('/home');
            }
          } catch (error) {
            console.error('Login error:', error.message);
          }
    }

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
                <Button className='loginButton' variant="outline-warning" onClick={login}>
                    Login
                </Button>
                <div className='noAccount'>Don't have an account yet? <div className='signUp' onClick={() => navigate('/register')}>Sign Up</div></div>
            </div>
        </div>
    );
}

export default Login;