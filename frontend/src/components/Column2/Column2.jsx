import Stack from "react-bootstrap/esm/Stack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Column2.css"
import ListSelector from "./ListSelector/ListSelector";
import { useState } from "react";


function Column2() {

    const [selectedList, setSelectedList] = useState("My Lists");

    const selectList = (listTitle) => {
        setSelectedList(listTitle);
    }

    return (
            <Stack className='vstack2' gap={3}>
                <ListSelector  passToColumn2={selectList} />
                <div>
                    {selectedList}
                </div>
            </Stack>
    );
}

export default Column2;