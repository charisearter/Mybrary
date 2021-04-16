const express = require("express");
const router = express.Router();


// All Books Route
router.get("/", (req, res) => {
	res.render("books/index");
});


// New Book route
router.get("/new", (req, res) => {
	res.render("books/new");
});


// Create Book route
router.post("/", (req, res) => {
	res.send("Create");
});


module.exports = router;