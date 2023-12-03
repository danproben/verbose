import React from 'react';
import Column3A from './3A/Column3A';
import Column3B from './3B/Column3B';
import Stack from 'react-bootstrap/esm/Stack';

function Column3(props) {

    return (
            <Stack gap={5} style={{height: '100%'}}>
                <Column3A />
                <Column3B />
            </Stack>
    );
}

export default Column3;