import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { supabase } from '../../database';

function NavBar(props) {

    const [firstName, setFirstName] = useState()

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

    return (
        <div className='navBarContainer'>
            <div className='logo'>Verbose</div>
            <div className='welcomeMessage'>Welcome, {firstName}!</div>
        </div>
    );
}

export default NavBar;