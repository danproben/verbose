import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';


function ListSelector({passToColumn2}) {

    const [selectedList, setSelectedList] = useState("My Lists")
    const [myLists, setMyLists] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        var url = 'http://localhost:3002/lists'

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setMyLists(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    console.log(myLists)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setList = (listTitle) => {
        setSelectedList(listTitle);
        passToColumn2(listTitle);
    }

    const createList = () => {
        var listTitle = document.getElementById("inputListName").value;
        setSelectedList(listTitle);
        
        handleClose();
    }

    return (
        <div className='dropdownContainer' data-bs-theme="dark">
            <ButtonGroup className='shadow-none' size='sm'>
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title={selectedList} drop='down-centered'>
                {myLists.map((list, index) => (
                    <Dropdown.Item style={{fontSize: '13px'}} onClick={() => setList(list.listTitle)}>{list.listTitle}</Dropdown.Item>
                ))}
            </DropdownButton>
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title="Options"  drop='down-centered'>
                <Dropdown.Item style={{fontSize: '13px'}}>Rename</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px'}} onClick={handleShow}>New List</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px', color: 'red'}}>Delete</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>

        <Modal contentClassName='modal' show={show} onHide={handleClose} data-bs-theme="dark">
            <Modal.Header closeButton>
            <Modal.Title style={{color: 'white'}}>New List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    type="input"
                    placeholder="List name"
                    id="inputListName"
                    autoFocus
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-warning" onClick={createList}>
                Create
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
  }
  
  export default ListSelector;