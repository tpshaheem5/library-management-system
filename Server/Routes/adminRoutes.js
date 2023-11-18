const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const tryCatch = require("../middlware/tryCatch")

router.post('/login', tryCatch(adminController));

module.exports = router;
