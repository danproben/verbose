import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { supabase } from '../../database';

function NavBar(props) {

    const [firstName, setFirstName] = useState()

    const navigate = useNavigate();

    useEffect(() => {

        supabase.auth.getUser().then((data) => {
                    
            let userId = data.data.user.id;
            return userId;

        }).then( async (userID) => {

            try {
                console.log(userID)
                
                let { data: Profile, error } = await supabase
                .from('Profile')
                .select('firstName')
                .eq('uuid', userID)
                
                setFirstName(Profile[0].firstName)
            } catch (err) {
                console.log(err)
            }
        })
    }, [])

    const logoutButtonClicked = async () => {

        console.log("Made it here")
        let { error } = await supabase.auth.signOut()
        if (error) {
            console.log(error)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='navBarContainer'>
            
            <div className='welcomeMessage'>Welcome, {firstName}!</div>
            <div className='logo' onClick={() => {navigate('/home')}}>Verbose</div>
            <div className='helpMenu' onClick={logoutButtonClicked}>Logout</div>
            <div className='helpMenu' onClick={() => {navigate('/about')}}>About</div>
            <div className='helpMenu' onClick={() => {navigate('/help')}}>Help</div>
        </div>
    );
}

export default NavBar;