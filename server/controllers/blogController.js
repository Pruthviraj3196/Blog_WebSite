const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title, blog_image_url, category_name, content } = req.body;
    const author = req.userId; // Automatically from token

    if (!title || !blog_image_url || !category_name || !content) {
      return res.status(400).json({
        message: "Please fill all fields: {title, blog_image_url, category_name, content}"
      });
    }

    const newBlog = new Blog({ title, blog_image_url, category_name, content, author });
    await newBlog.save();

    res.status(201).json({
      message: "Blog Created Successfully",
      newBlog,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.userId });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
