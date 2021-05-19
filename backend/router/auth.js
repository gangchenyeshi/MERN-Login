const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Home page from Server router");
});

module.exports = router;