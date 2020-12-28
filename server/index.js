var express = require('express')
const cors = require("cors");

var app = express()

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/login', function (req, res) {
    res.send({id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
    username: 'shyam',
    firstName: 'John',
    lastName: 'Maverick',})
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});