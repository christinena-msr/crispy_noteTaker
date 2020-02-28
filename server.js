const express = require("express");
// no need to download, included in node
const path = require("path");

// app needs to be initialized before using express otherwise it's just the object 
const app = express();
const port = 3000;

// boiler plate - middleware
// make response readable, give access to request.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/notes', (req, res) => {
    // logging new routes?
    console.log("notes!");

    res.sendFile(path.join(__dirname, './Develop/public/assets/notes.html'));
});

// create variables in routes 
// ":VARIABLE_NAME" will take anything (dynamic route)
// express is going to attach it to req.params --> req.params.character
// app.get('/:character', (req, res) => {
//     // logging new routes?
//     console.log(req.params.character);
// })
// must match /api/SOMETHING in order to have 
// does not throw any 404 errors as long as it matches route
// do not include query strings into route: anything after "?"

// handles routes for you
app.get('*', (req, res) => {
    // res.send("Welcome to our Star Wars Page!");
    
    // send html
    // path is an included package with node
    // we want express to look at the absolute root of our path
    // so that when hosted on Heroku, it will know where to find the file 
    res.sendFile(path.join(__dirname, './Develop/public/assets/index.html'));
});

app.listen(port, () => console.log(`App is running on port: ${port}`));