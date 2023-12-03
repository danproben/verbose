import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Column1 from '../../components/Column1/Column1';
import Column2 from '../../components/Column2/Column2';
import Column3 from '../../components/Column3/Column3';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';

function Home(props) {

    const [listId, setListId] = useState();
    const [words, setWords] = useState([])

    const passListIdHome = (listId) => {
        setListId(listId)
    }

    const passWordToHome = (word, partOfSpeech, definition) => {
        setWords([...words, {word: word, partOfSpeech: partOfSpeech, definition: definition}])
    }

    const selectList = (listID) => {

        passListIdHome(listID);

        fetch(`http://localhost:3002/getWords/${listID}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setWords(data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const removeWord = (word) => {

        const url = `http://localhost:3002/removeWord/${word.id}`;

        fetch(url)
        .catch((error) => {
            console.log(error);
        });

        setWords(oldWords => {
            return oldWords.filter(words => words.id !== word.id)
        })
    }

    

    return (
        <>
            <NavBar />
            <Stack className='hstack' direction="horizontal" gap={5}>
                <div className="column1"><Column1 listId={listId} passWordToHome={passWordToHome} /></div>
                <div className="column2 ms-auto"><Column2 passListIdHome={passListIdHome} words={words} selectList={selectList} removeWord={removeWord}/></div>
                <div className="column3 ms-auto"><Column3/></div>
            </Stack>
        </>
    );
}

export default Home;