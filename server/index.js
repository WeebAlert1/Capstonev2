require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const {SERVER_PORT} = process.env
const {
    getShows,
    deleteShow, 
    createShow, 
    
} = require('./controller')

app.get(`/api/shows`, getShows)
app.delete(`/api/shows/:id`, deleteShow)
app.post(`/api/shows`, createShow)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));