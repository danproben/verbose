import Stack from "react-bootstrap/esm/Stack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Column2.css"
import ListSelector from "./ListSelector/ListSelector";
import Accordions from "./Accordians/Accordions";
import { useState } from "react";


function Column2({passListIdHome, words, selectList, removeWord}) {


    return (
            <Stack className='vstack2' gap={3}>
                <ListSelector  passToColumn2={selectList} />
                <Accordions words={words} removeWord={removeWord} className="accordion" />
            </Stack>
    );
}

export default Column2;