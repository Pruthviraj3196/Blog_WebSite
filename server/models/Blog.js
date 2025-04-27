const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: 
  { 
    type: String, 
    required: true 
  },
  blog_image_url: { 
    type: String, 
    required: true 
  },
  category_name: 
  { 
    type: String, 
    required: true 
   },
  content: 
  { 
    type: String, 
    required: true 
  },
  author: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  createdAt: 
  { 
    type: Date, 
    default: Date.now 
  }
});
const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;