import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListSelector.css'
import { useEffect, useState } from 'react';
import { supabase } from '../../../database';



function ListSelector({passToColumn2}) {

    const [selectedList, setSelectedList] = useState("My Lists")
    const [myLists, setMyLists] = useState([]);
    const [show, setShow] = useState(false);
    const [UUID, setUUID] = useState();

    useEffect(() => {

        supabase.auth.getUser().then((data) => {

			let userId = data.data.user.id;
            setUUID(userId);
			return userId;

		}).then((userID) => {

            fetch(`http://localhost:3002/lists/${userID}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setMyLists(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        )
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setList = (listID, listTitle) => {

        setSelectedList(listTitle);
        passToColumn2(listID);
    }

    const createList = () => {
        var listTitle = document.getElementById("inputListName").value;

        // Create the list in supabase

        var url = 'http://localhost:3002/createList'

        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    listTitle: listTitle,
                    uuid: UUID
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        ).then(() => {

            console.log()
            setSelectedList(listTitle);
            
            fetch(`http://localhost:3002/lists/${UUID}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setMyLists(data);
                    // pass the new list ID back to the Home component
                    passToColumn2(data[data.length - 1].id)
                })
                .catch((error) => {
                    console.log(error);
                });
                
        })
        
        handleClose();
    }

    return (
        <div className='dropdownContainer' data-bs-theme="dark">

            {/* -------- My Lists -------- */}
            <ButtonGroup size='sm'>
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title={selectedList} drop='down-centered' className='dropdownButton'>
                {myLists.map((list, index) => (
                    <Dropdown.Item key={index} style={{fontSize: '13px'}} onClick={() => setList(list.id, list.listTitle)}>{list.listTitle}</Dropdown.Item>
                ))}
            </DropdownButton>

            {/* -------- Options -------- */}
            <DropdownButton size='sm' variant="outline-warning" as={ButtonGroup} title="Options"  drop='down-centered'>
                <Dropdown.Item style={{fontSize: '13px'}}>Rename</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px'}} onClick={handleShow}>New List</Dropdown.Item>
                <Dropdown.Item style={{fontSize: '13px', color: 'red'}}>Delete</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>

        {/* -------- Modal -------- */}
        <Modal contentClassName='modal' show={show} onHide={handleClose} data-bs-theme="dark">
            <Modal.Header closeButton>
            <Modal.Title style={{color: 'white'}}>New List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
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