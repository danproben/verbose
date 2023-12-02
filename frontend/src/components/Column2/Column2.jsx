import Stack from "react-bootstrap/esm/Stack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Column2.css"
import ListSelector from "./ListSelector/ListSelector";
import Accordions from "./Accordians/Accordions";
import { useState } from "react";


function Column2({passListIdHome}) {

    const [selectedListID, setSelectedListID] = useState("My Lists");
    const [words, setWords] = useState([])

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

    setWords([...words, newWord])

    return (
            <Stack className='vstack2' gap={3}>
                <ListSelector  passToColumn2={selectList} />
                <Accordions words={words} className="accordion" />
            </Stack>
    );
}

export default Column2;