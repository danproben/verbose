import React from "react";
import plus from "./rightArrow.png"
import "./AddWord.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/esm/Button";


function AddWord() {
    return (
        <Button variant="outline-warning" className="button" size="sm">
        <div>+</div>
        </Button>
    );
}

export default AddWord;