const express = require("express");
const dotenv = require("dotenv");

const app = express();

//SECRET
dotenv.config({ path: "./config.env" });

//Mongoose Connection
require("./db/connect");

//link our Router file connection
app.use(require("./router/auth"));

//middleware express JSON, undefine to json format data 
app.use(express.json());

//import userModel
const userModel = require('./model/userSchema');
//SERVER Connection
const PORT = process.env.PORT



// MIDDLEWARE

// Why middleware?
// if user want to access the about page, middleware will check the user login or not, without login then middleware is entering
const middleware = (req, res, next) => {
    console.log("Hello Middleware");
    next();
}
// middleware();


// ROUTING
// app.get('/', (req, res) => {
//     res.send("Hello Home page from Server");
// });
app.get('/about', middleware, (req, res) => {
    console.log("Hello Middleware from About");
    res.send("Hello about page from Server");
});
app.get('/contact', (req, res) => {
    res.send("Hello contact page from Server");
});
app.post('/register', (req, res) => {
    console.log(req.body);
    // res.send("Hello signup page from Server");
    res.send({message: req.body});
});
app.get('/signin', (req, res) => {
    res.send("Hello signin page from Server");
});


//LISTENING
app.listen(PORT, () => {
    console.log(`Server is connected at port no ${PORT}`)
});
