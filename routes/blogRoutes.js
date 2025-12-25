const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE BLOG
router.post("/", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL BLOGS
router.get("/", async (req, res) => {
  const blogs = await Blog.find().populate("author", "username");
  res.json(blogs);
});

module.exports = router;
