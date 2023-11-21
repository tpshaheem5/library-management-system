const express = require("express");
const router = express.Router()

const bodyparser = require("body-parser");
const userController = require("../User/userController")
const books = require("../User/books")
const tryCatch = require ("../middlware/tryCatch.js")

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

router.post("/signup",tryCatch(userController.signup))
router.post("/login",tryCatch(userController.login))

router.get("/allbooks",tryCatch(books.getAllBooks))
router.get("/book/:bookId",tryCatch(books.getBookDetails))
// router.get("/search",tryCatch(books.searchBooks))


module.exports = router