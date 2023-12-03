import React, { useEffect, useState } from 'react';
import { supabase } from '../../../database';
import './Column3B.css'
import correct from './correct.png'
import wrong from './wrong.png'

function Column3B(props) {

    const definitions = ["a final state", "using or containing too many words", "offensive to the mind", "pouring in abundance"]
    //const [word, setWord] = useState();
    const [quizWords, setQuizWords] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState();

    useEffect(() => {
        getRandomWord();
    }, [])

    // get a random word
    const getRandomWord = () => {

        document.getElementById("correctImage").style.visibility = "hidden"
        document.getElementById("wrongImage").style.visibility = "hidden"

        supabase.auth.getUser().then((data) => {

			let userId = data.data.user.id;
			return userId;

		}).then((userID) => {

            fetch(`http://localhost:3002/getQuizWords/${userID}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    data.push(data[Math.floor(Math.random()*data.length)])
                    setQuizWords(data)
                    //setCorrectAnswer(data[Math.floor(Math.random()*data.length)]);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )
    }

    const checkAnswer = (optionClicked) => {
        if (optionClicked.id === quizWords[quizWords.length - 1].id){
            console.log("Correct!")
            document.getElementById("correctImage").style.visibility = "visible"
            document.getElementById("wrongImage").style.visibility = "hidden"
        } else {
            console.log("Wrong!")
            document.getElementById("correctImage").style.visibility = "hidden"
            document.getElementById("wrongImage").style.visibility = "visible"
        }

        setTimeout(getRandomWord, 1000);
    }

    return (
        <div className='quizContainer'>
            <p className='column3B-title'>Quiz!</p>
            <div className='optionsContainer'>
                <p className='quizWord'>{quizWords[quizWords.length - 1]?.word}</p>
                {quizWords?.slice(0, 4).map((item, index) => (
                    <p className='quizOptions' onClick={() => checkAnswer(item)}>{index + 1}. {item.definition}</p>
                    
                ))}
                <div className='correctImageContainer'><img src={wrong} alt="" id='wrongImage'  /><img src={correct} alt="" id='correctImage' /></div>
            </div>
            
        </div>
    );
}

export default Column3B;