import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Column1 from '../../components/Column1/Column1';
import Column2 from '../../components/Column2/Column2';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';

function Home(props) {

    const [listId, setListId] = useState();
    const [words, setWords] = useState([]);

    const passListIdHome = (listId) => {
        setListId(listId)
    }

    //TODO: Update words state variable inside accordian.
    const passWordToHome = (word) => {
        
    }

    return (
        <>
            <NavBar />
            <Stack className='hstack' direction="horizontal" gap={5}>
                <div className="column1"><Column1 listId={listId} /></div>
                <div className="column2 ms-auto"><Column2 passListIdHome={passListIdHome} /></div>
                <div className="column3 ms-auto">Third item</div>
            </Stack>
        </>
    );
}

export default Home;