import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import './Register.css'


function Register(props) {

    const navigate = useNavigate();

    const register = () => {

        var email = document.getElementById("registerEmailInput").value;
        var password = document.getElementById("registerPasswordInput").value;
        var confirmPassword = document.getElementById("confirmRegisterPasswordInput").value;

        if (password == confirmPassword) {

            var url = 'http://localhost:3002/register'

            fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
                .then((res) => {
                    return res.json()
                }).then((data) => {
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error);
                });

                navigate('/login')
        }
    }

    return (
        <div className='mainContainer'>
            <div className='loginContainer'>
                <h1>Sign Up <span className='websiteTitle'>Verbose</span></h1>
                <div className='nameContainer'>
                    <Form.Control
                    id='nameInput'
                    aria-label="name"
                    placeholder='First Name'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <div className='emailContainer'>
                    <Form.Control
                    id='registerEmailInput'
                    aria-label="Username"
                    placeholder='Email'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <div className='passwordContainer'>
                    <Form.Control
                    id='registerPasswordInput'
                    placeholder="Password"
                    aria-label="Password"
                    type='password'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <div className='confirmPasswordContainer'>
                    <Form.Control
                    id='confirmRegisterPasswordInput'
                    placeholder="Confirm Password"
                    aria-label="Password"
                    type='password'
                    aria-describedby="basic-addon1"
                    className="shadow-none"
                    />
                </div>
                <Button className='registerButton' variant="outline-warning" onClick={register}>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Register;