/*
    index.js
*/

import supabase from './config/db.js'
import express from 'express'
import dotenv from 'dotenv'
// import mysql from 'mysql2/promise'
import cors from 'cors'

dotenv.config( { path : '.env' } );


// ------------------- Set up express server

const app = express()

// Needed for express POST requests to parse a JSON req.body
app.use(express.json());

app.options(cors());
app.use(cors())

// Not sure what this is needed for yet lol
app.use(express.urlencoded({ extended: false}));

// ------------------- Endpoints

app.get('/lists/:uid', async (req, res) => {

	const UUID = req.params.uid;

    try {
        let { data: Lists, error } = await supabase
        .from('Lists')
        .select('*')
		    .eq('uuid', UUID)
        .order('id', { ascending: true })
  
        // filter the listTitle since that is really all we make use of on the frontend
        // Lists.map((item, index) => {
        //   Lists[index] = item.listTitle
        // })

        res.send(Lists);
      } catch (err) {
        console.log(err)
      }
})

app.post('/createList', async (req, res) => {

  const listTitle = req.body.listTitle;
  const uuid = req.body.uuid;

  try {
      let { data: Lists, error } = await supabase
      .from('Lists')
      .insert([
        { uuid: uuid, listTitle: listTitle },
      ])

      console.log("Added ", listTitle);
      res.send(listTitle);
    } catch (err) {
      console.log(err)
    }
})

app.get('/getWords/:listID', async (req, res) => {

  let listID = req.params.listID;

  try {
      let { data: Words, error } = await supabase
      .from('Definitions')
      .select('word, definition, partOfSpeech')
      .eq('listId', listID)

      res.send(Words);
    } catch (err) {
      console.log(err)
    }
})

app.post('/register', async (req, res) => {

	const email = req.body.email;
	const password = req.body.password;

	try {
		const { error } = await supabase.auth.signUp({
			email, password });
			console.log(error)
	} catch (error) {
		console.error("Error signing up user:", error);
	}
})


app.post('/addWord', async (req, res) => {
  const word = req.body.word;
  const partOfSpeech = req.body.partOfSpeech;
  const definition = req.body.definition;
  const listId = req.body.listId

  try {
    const { data, error } = await supabase
    .from('Definitions')
    .insert([
      { word: word, partOfSpeech: partOfSpeech, definition: definition, listId: listId },
    ])
    .select()

    console.log("Added ", word);
  } catch (err) {
    console.log(err)
  }

})

app.listen(3002, () => {
    console.log('App is running on 3002')
  })