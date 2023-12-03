import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './About.css'
import dbImg from './databaseSchema.png'
import fourwords from './fourwords.png'
import randomword from './randomword.png'


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
                                Dictionary: WordsAPI
                            </li>
                            <li>
                                API testing: Postman
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='businessLogic'>
                    <h1 className='itemTitle'>Business Logic</h1>
                    <div className='itemContent'>
                        <p>When a word is searched, it makes a request to the Words API via RapidAPI using the word currently in the search bar. Once response is received, it updates a state variable which updates the UI.
                            When a new word is added, it first makes a POST request to the backend with that word in the request body, which makes a request to Supabase to be inserted. It then passes the word that is clicked to its parent components. When the highest parent is reached, it passes it down the hierarchy of column 2 which populates the accordion list of words.</p>
                        <p>Deleting a word from a list is almost the exact same process</p>
                        <p>To fetch a random word, I had to use stored postgres procedures in Supabase, since the query itself would be too complicated for their API. It needs to get all lists associated with a user, all words associated with all those lists, and choose 1 at random. The same thing was done for the quiz data, only the number of random words was limited to 4 instead of 1.</p>
                        <p>Selects four random words</p>
                        <img src={fourwords} className='storedProcedure' />
                        <p>Selects 1 random word</p>
                        <img src={randomword} className='storedProcedure' alt="" />
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