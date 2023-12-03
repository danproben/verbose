import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './About.css'
import dbImg from './databaseSchema.png'


function About(props) {
    return (
        <>
            <NavBar />
            <div className='aboutContainer'>

                <div className='architecture'>
                    <h1 className='itemTitle'>Architecture</h1>
                    <div className='itemContent'>
                        <p>Technologies</p>
                        <ul>
                            <li>
                                Frontend: React.js
                            </li>
                            <li>
                                Backend: Node.js
                            </li>
                            <li>
                                Database: Supabase
                            </li>
                            <li>
                                Dictionary data: WordsAPI
                            </li>
                        </ul>
                        With all functionality being on one page, other than the Help and About pages, there isn't much architecture to speak of. The Home component is the parent to columns 1-2 which pass data back and forth via the Home component.
                        Columns 3a and 3b are standalone and work independently. 
                    </div>
                </div>
                <div className='businessLogic'>
                    <h1 className='itemTitle'>Business Logic</h1>
                    <div className='itemContent'>
                        <p></p>
                    </div>
                </div>
                <div className='databaseDesign'>
                    <h1 className='itemTitle'>Database Design</h1>
                    
                    <div className='itemContent'>
                        <p>Profile → Lists → Definitions</p>
                        <p>Also uses stored procedures for finding a random word and for finding 4 random words for the quiz data (which would have been too complex of queries to do with single POST requests).</p>
                        <img src={dbImg} className="dbImg" alt="" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;