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

app.get('/lists', async (req, res) => {

    try {
        let { data: Lists, error } = await supabase
        .from('Lists')
        .select('*')
        .order('id', { ascending: true })
  
        res.send(Lists);
      } catch (err) {
        console.log(err)
      }
})

app.listen(3002, () => {
    console.log('App is running on 3002')
  })