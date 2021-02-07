/* AW - JS object endpoint */
projectData = {};

/* AW - Dependencies */
const express = require('express');                 // We're telling app to use the express package we installed at the console with npm.

/* AW - App instance */
const app = express();                              // Start up an instance of app:

/* AW - Middleware*/
const bodyParser = require('body-parser');          // body-parser required to handle middle-ware.
app.use(bodyParser.urlencoded({extended: false}));  // Config body-parser with url encoding.
app.use(bodyParser.json());                         // Config body-parser with json.

/* AW - Cross origin allowance */
const cors = require('cors');                       // Cors required for cross origin allowance.
app.use(cors());                                    // Config express to use cors for security.

/* AW - Initialize */
app.use(express.static('www'));                     // http://localhost:1024/

/* AW - Localhost */
const port = 1024
const server = app.listen(port, ()=>{console.log(`AmazingWeather is running on localhost:${port}`)})

/* AW - Server side POST Route: Data received from the client side POST. */
app.post('/new-entry', updateEndpoint);
function updateEndpoint (req,res){
    newEntry = {
        datum: req.body.datum,
        tempum: req.body.tempum,
        feeling: req.body.feeling
    };
    projectData = newEntry;
};

/* AW - GET Route I: Return endpoint data to client */
app.get('/add-entry', updateUI); 
function updateUI (req, res) {
    res.send(projectData);
    return projectData;
};