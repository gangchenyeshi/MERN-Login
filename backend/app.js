const express = require ("express");
const app = express();



// ROUTING
app.get('/', (req, res) => {
    res.send("Hello Home page from Server");
});
app.get('/about', (req, res) => {
    res.send("Hello about page from Server");
});
app.get('/contact', (req, res) => {
    res.send("Hello contact page from Server");
});
app.get('/signup', (req, res) => {
    res.send("Hello signup page from Server");
});
app.get('/signin', (req, res) => {
    res.send("Hello signin page from Server");
});


//LISTENING
app.listen(8000, () => {
    console.log("Server is connected at port 8000")
});
