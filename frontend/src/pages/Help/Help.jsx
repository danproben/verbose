import React from 'react';
import './Help.css'
import search from './search.png'
import selectList from './selectList.png'
import wordAdded from './wordAdded.png'
import NavBar from '../../components/NavBar/NavBar';
import clickPlus from './clickPlus.png'

function Help(props) {
    return (
        <>
        <NavBar />
        <div className='instructionsContainer'>

            <p className='instruction'>1. Select a list. If one doesn't exist, click 'New List" to create one.</p>
            <img src={selectList} className='imgSet' alt="" />
            <p className='instruction'>2. Search a word by typing the word into the search bar in column 1 and pressing 'Enter'</p>
            <img src={search} className='imgSet' alt="" />
            <p className='instruction'>3. Click the plus button to add a specific definition to selected list</p>
            <img src={clickPlus} className='imgSet' alt="" />
        </div>
        </>

    );
}

export default Help;