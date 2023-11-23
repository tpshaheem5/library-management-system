const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const bookController = require("../Controller/bookController")
const usermanagement = require("../Controller/usermanagement")
const tryCatch = require("../middlware/tryCatch")

router.post('/login', tryCatch(adminController));

router.post("/addbooks",tryCatch(bookController.addBook))
router.get("/allbooks",tryCatch(bookController.getAllBooks))
router.get("books/:bookId",tryCatch(bookController.getBookDetails))
router.put("books/:bookId",tryCatch(bookController.updateBookDetails))
router.delete("books/:bookId",tryCatch(bookController.deleteBook))

router.get("/allusers", tryCatch(usermanagement.getAllUsers));
router.get("/users/:userId",tryCatch(usermanagement.getUserDetails))
router.delete("/users/:userId",tryCatch(usermanagement.deleteUser))

module.exports = router;