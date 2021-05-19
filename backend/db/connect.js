const mongoose = require("mongoose");

//Mongoose connection
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("DB connect Successful");
    }).catch((err) => {
        console.log("DB Not connected")
    })
