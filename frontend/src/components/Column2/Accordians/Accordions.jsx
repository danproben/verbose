import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import './Accordions.css'
import { useEffect, useState } from 'react';



function Accordians({words}) {



    return (
        <div>
                <Accordion>
                {words.map((item, index) => (
                    <Accordion.Item key={index} eventKey={index} className="accordion-item">
                        <Accordion.Header>{item.word}</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                {item.partOfSpeech}:
                            </div>
                            <div>
                                {item.definition}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                       ))}
                </Accordion>
        </div>
    );
}

export default Accordians;