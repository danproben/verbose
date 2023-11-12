import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Column1 from '../../components/Column1/Column1';
import Column2 from '../../components/Column2/Column2';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
    return (
        <Stack className='hstack' direction="horizontal" gap={5}>
            <div className="column1"><Column1 /></div>
            <div className="column2 ms-auto"><Column2 /></div>
            <div className="column3 ms-auto">Third item</div>
        </Stack>
    );
}

export default Home;