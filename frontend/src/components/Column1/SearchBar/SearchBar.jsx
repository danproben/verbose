import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AddWord from "../AddWord/AddWord";

function SearchBar({populateDefinition}) {

	const submitWord = async (input) => {

		if (input.key === 'Enter' && input.target.value !== ""){

			var word = input.target.value

			const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
					'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
				}
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				populateDefinition(result);
			} catch (error) {
				populateDefinition(error.message);
			}
		}
	}

    return (


		<InputGroup>
			<Form.Control
			type="input"
			id="searchBar"
			placeholder="Search a word"
			size="sm"
			onKeyDown={submitWord}
			className="shadow-none"
			/>
			{/* <AddWord /> */}
		  </InputGroup>
    )
}

export default SearchBar;