const express = require("express");
const router = express.Router()

const bodyparser = require("body-parser");
const userController = require("../Controller/userController")
const tryCatch = require ("../middlware/tryCatch.js")

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

router.post("/signup",userController.signup,tryCatch(userController.signup))
router.post("/login",userController.login,tryCatch(userController.login))


module.exports = router