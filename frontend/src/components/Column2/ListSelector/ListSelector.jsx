import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { render } from 'react-dom';

function ListSelector({passToColumn2}) {

    const [selectedList, setSelectedList] = useState("My Lists")

    const setList = (listTitle) => {
        setSelectedList(listTitle);
        passToColumn2(listTitle);
    }

    return (
        <div className='dropdownContainer' data-bs-theme="dark">
            <ButtonGroup size='sm' >
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title={selectedList} drop='down-centered'>
                <Dropdown.Item style={{fontSize: '13px'}} onClick={() => setList("The Experience of God")}>The Experience of God</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px'}} onClick={() => setList("Aristotle's Ethics")}>Aristotle's Ethics</Dropdown.Item>
            </DropdownButton>
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title="Options"  drop='down-centered'>
                <Dropdown.Item style={{fontSize: '13px'}}>Rename</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px', color: 'red'}}>Delete</Dropdown.Item>
            </DropdownButton>
            <Button variant="outline-warning">+</Button>
            </ButtonGroup>
        </div>
    );
  }
  
  export default ListSelector;