import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../features/blog/blogSlice';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: '',
    blog_image_url: '',
    category_name: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createBlog({ blogData: formData, token })).unwrap();
      alert('Blog Created Successfully!');
      setFormData({ title: '', blog_image_url: '', category_name: '', content: '' });
      navigate('/blogs'); // ✅ Navigate to BlogList page
    } catch (error) {
      console.error("Error creating blog:", error);
      alert('Failed to create blog. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="blog_image_url"
          placeholder="Image URL"
          value={formData.blog_image_url}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="category_name"
          placeholder="Category"
          value={formData.category_name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
