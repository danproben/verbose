import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AddWord from "../AddWord/AddWord";
import plus from "./plus.png"
import dotenv from 'dotenv'

dotenv.config( { path : 'frontend/.env' } );

const XRapidAPIKey = process.env.XRapidAPIKey;

import { useState } from "react";

function SearchBar({populateDefinition}) {



	const submitWord = async (input) => {

		if (input.key === 'Enter' && input.target.value !== ""){

			var word = input.target.value

			const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': {XRapidAPIKey},
					'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
				}
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				populateDefinition(result);
			} catch (error) {
				const issue = {
					
				}
				populateDefinition(error.message);
			}
		}
	}

    return (


		<InputGroup>
			<Form.Control
			type="input"
			id="searchBar"
			placeholder="Search"
			size="sm"
			onKeyDown={submitWord}
			/>
			<AddWord />
		  </InputGroup>
    )
}

export default SearchBar;