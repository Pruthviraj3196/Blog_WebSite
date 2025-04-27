import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/blog/blogSlice';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs, loading, error } = useSelector((state) => state.blog);
  const { token } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const blogsPerPage = 6;

  useEffect(() => {
    if (token) {
      dispatch(fetchBlogs(token));
    }
  }, [dispatch, token]);

  // Debounce the search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchQuery(searchInput);
      setCurrentPage(1); // Reset to first page when search changes
    }, 500); // 500ms delay

    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  const handleCreateBlog = () => {
    navigate('/create');
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full">
      <ImageSlider />

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <h2 className="text-4xl font-bold text-gray-800">My Blogs</h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-48 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleCreateBlog}
              className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              + Create Blog
            </button>
          </div>
        </div>

        {loading && <p>Loading blogs...</p>}
        {error && <p className="text-red-500">Error loading blogs: {error}</p>}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(currentBlogs) && currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <div key={blog._id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="overflow-hidden group">
                  <img
                    src={blog.blog_image_url}
                    alt={blog.title}
                    className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-sm text-green-600 font-medium mb-2">{blog.category_name}</p>
                  <p className="text-gray-600 text-sm">{blog.content.slice(0, 100)}...</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No blogs found.</p>
          )}
        </div>

        {filteredBlogs.length > blogsPerPage && (
          <div className="flex justify-center mt-10 space-x-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
