const express = require ("express");

const app = express();


// MIDDLEWARE
// Why middleware?
// if user want to access the about page, middleware will check the user login or not, without login then middleware is entering
const middleware = (req, res, next) => {
    console.log("Hello Middleware");
    next();
}
// middleware();


// ROUTING
app.get('/', (req, res) => {
    res.send("Hello Home page from Server");
});
app.get('/about', middleware,(req, res) => {
    console.log("Hello Middleware from About");
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
