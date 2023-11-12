import "./DefinitionBox.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from "react-bootstrap/esm/Button";

function DefinitionBox({word}) {

    return (
        <div className="definitionBox">
                <div>
                    <div className="word">{word.word ? word.word : "Word not found"}</div>
                    <div className="definitionsContainer">{word.definitions?.map((word, index) => (
                        <div className="definitions">
                            <div className="addButton">+</div>
                            <div className="partOfSpeech">{word.partOfSpeech}</div>
                            <div className="definition">: {word.definition}</div>
                        </div>
                    ))}
                    </div>
                </div>
        </div>
    );
}

export default DefinitionBox;