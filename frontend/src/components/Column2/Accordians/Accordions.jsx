import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import './Accordions.css'
import { useEffect, useState } from 'react';
import trash from './trash.png'
import minus from './minuscircle.png'


function Accordians({words, removeWord}) {

    return (
        <div className='accordionContainer'>
                <Accordion>
                {words.map((item, index) => (
                    <Accordion.Item key={index} eventKey={index} className="accordion-item">
                        <Accordion.Header>{item.word}</Accordion.Header>
                        <Accordion.Body>
                            <div className='accordionDefinition'>
                                <p style={{display: 'inline'}}>{item.partOfSpeech}: {item.definition}</p>
                            </div>
                            <div className='trash'><img src={minus} className="trashImg" alt="" onClick={() => removeWord(item)} /></div>
                        </Accordion.Body>
                    </Accordion.Item>
                       ))}
                </Accordion>
        </div>
    );
}

export default Accordians;