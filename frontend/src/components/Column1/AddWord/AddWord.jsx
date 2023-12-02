import React from "react";
import "./AddWord.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/esm/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function AddWord() {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            Add To Selected List
          </Tooltip>
        )

    return (
        <OverlayTrigger
        placement="right"
        delay={{ show: 0, hide: 4 }}
        overlay={renderTooltip}
        >
            <Button variant="outline-warning" className="button shadow-none" size="sm">
            <div>+</div>
            </Button>
        </OverlayTrigger>
    );
}

export default AddWord;