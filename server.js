const express = require("express");
// no need to download, included in node
const path = require("path");
const fs = require("fs");

const db = require("./Develop/db/db.json");

// app needs to be initialized before using express otherwise it's just the object 
const app = express();
const port = 3000;

// boiler plate - middleware
// make response readable, give access to request.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + './Develop/public/assets/js'));

// handles routes for you

app.get('/notes', (req, res) => {
    // logging new routes?
    console.log("notes!");

    res.sendFile(path.join(__dirname, './Develop/public/assets/notes.html'));
});

// create variables in routes 
// ":VARIABLE_NAME" will take anything (dynamic route)
// express is going to attach it to req.params --> req.params.character
// must match /api/SOMETHING in order to have 
// does not throw any 404 errors as long as it matches route
// do not include query strings into route: anything after "?"

app.get('/api/notes', (req, res) => {
    
    // send html
    // path is an included package with node
    // we want express to look at the absolute root of our path
    // so that when hosted on Heroku, it will know where to find the file 
    // fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
    //     if(err) {
    //         throw err;
    //     }
    //     res.send("string");
    //     // const savedNotes = data;
    //     // console.log(data);
    //     // res.send(JSON.stringify(data));
    //     // res.send(JSON.stringify(savedNotes));
    // });
    //specifies that the data type sending is json
    res.json(db);
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    // db.push({title: req.body, text:)
    // fs.writeFile("./Develop/db/db.json", "utf8", (err) => {
    //     if(err) {
    //         throw err;
    //     }
    //     console.log("success! note saved");
    // })
    // send html
    // path is an included package with node
    // we want express to look at the absolute root of our path
    // so that when hosted on Heroku, it will know where to find the file 
    // res.redirect("/");
});

// app.delete('/api/notes/:id', (req, res) => {
//     // res.send("Welcome to our Star Wars Page!");
    
//     // send html
//     // path is an included package with node
//     // we want express to look at the absolute root of our path
//     // so that when hosted on Heroku, it will know where to find the file 
//     res.sendFile(path.join(__dirname, './Develop/public/assets/index.html'));
// });

app.get('*', (req, res) => {
    // res.send("Welcome to our Note Taker Home Page!");
    console.log(db);
    db.push({title: "to do", text: "something"});
    console.log("After push: ", db);
    // send html
    // path is an included package with node
    // we want express to look at the absolute root of our path
    // so that when hosted on Heroku, it will know where to find the file 
    res.sendFile(path.join(__dirname, './Develop/public/assets/index.html'));
});

app.listen(port, () => console.log(`App is running on port: ${port}`));