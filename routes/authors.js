const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// All Authors Route
router.get("/", (req, res) => {
	res.render("authors/index", { author: new Author() });
});

// New Author route
router.get("/new", (req, res) => {
	res.render("authors/new");
});

// Create Author route
router.post("/", (req, res) => {
	res.send("Create");
});

module.exports = router;
