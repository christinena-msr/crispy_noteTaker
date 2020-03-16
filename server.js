const express = require("express");
// no need to download, included in node
const path = require("path");
const fs = require("fs");

const db = require("./db/db.json");

// app needs to be initialized before using express otherwise it's just the object 
const app = express();
const port = process.env.PORT || 3000;

let id = 0;

// boiler plate - middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
// handles routes for you

app.get('/notes', (req, res) => {
    // returns page for user to enter, delete notes
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.post('/api/notes', (req, res) => {
    // id increments for each new note
    id++;
    const newNote = { id: id, title: req.body.title, text: req.body.text };
    db.push(newNote);
    res.json(db);
});

app.delete('/api/notes/:id', (req, res) => {
    // given the note id, finds index of note with matching id
    // formula found on stackoverflow
    const index = db.findIndex(note => note.id == req.params.id);
    // removes note from json array
    db.splice(index, 1);
    res.json(db);
});

// any other paths not explicitly specified will be redirected to the homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => console.log(`App is running on port: ${port}`));