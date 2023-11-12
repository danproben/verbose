import SearchBar from "./SearchBar/SearchBar";
import DefinitionBox from "./DefinitionBox/DefinitionBox";
import Stack from "react-bootstrap/esm/Stack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Column1.css"
import { useState } from "react";
import AddWord from "./AddWord/AddWord";


function Column1() {

    const [word, setWord] = useState([])

    const populateDefinition = (input) => {
        console.log(input);
        setWord(input)
    }
    
    return (
            <Stack className='vstack1' gap={3}>
                <SearchBar populateDefinition={populateDefinition} />
                <DefinitionBox word={word}/>
            </Stack>
    );
}

export default Column1;