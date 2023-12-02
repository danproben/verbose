import SearchBar from "./SearchBar/SearchBar";
import DefinitionBox from "./DefinitionBox/DefinitionBox";
import Stack from "react-bootstrap/esm/Stack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Column1.css"
import { useState } from "react";


function Column1({listId}) {

    const [word, setWord] = useState([])

    const populateDefinition = (input) => {
        console.log(input);
        setWord(input)
    }

    const addDefinition = (partOfSpeech, definition) => {

        const url = `http://localhost:3002/addWord`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                word: word.word,
                partOfSpeech: partOfSpeech,
                definition: definition,
                listId: listId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    
    return (
            <Stack className='vstack1' gap={3}>
                <SearchBar populateDefinition={populateDefinition} />
                <DefinitionBox word={word} addDefinition={addDefinition}/>
            </Stack>
    );
}

export default Column1;