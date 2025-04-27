const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getUserBlogs, createBlog } = require('../controllers/blogController');

router.get('/blogs', authMiddleware, getUserBlogs);
router.post('/blogs', authMiddleware, createBlog);

module.exports = router;