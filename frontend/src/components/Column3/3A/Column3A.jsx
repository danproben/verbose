import React from 'react';
import { supabase } from '../../../database';
import './Column3A.css'
import { useState, useEffect } from 'react';
import refresh from './refresh.png'

function Column3A() {

    const [word, setWord] = useState();

    useEffect(() => {

        getRandomWord();

    }, [])



    const getRandomWord = () => {

        supabase.auth.getUser().then((data) => {

			let userId = data.data.user.id;
			return userId;

		}).then((userID) => {

            fetch(`http://localhost:3002/wordOfTheDay/${userID}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setWord(data[0])
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )
    }

    return (
        <div className='wotdContainer'>
            <p className='column3A-title'>Random Word</p>
            <div className='definitionContainer'>
                <p className='wordContainer'>{word?.word}</p>
                <p className='partOfSpeechContainer'x>{word?.partOfSpeech}</p>
                <p className='wordDefinitionContainer'>{word?.definition}</p>
                <div className='refreshImgContainer'><img src={refresh} alt="" className='refreshImg' onClick={getRandomWord}/></div>
            </div>
        </div>
    );
}

export default Column3A;