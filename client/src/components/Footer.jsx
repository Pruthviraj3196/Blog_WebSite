import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: App Name and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-blue-500">Blogs</h2>
            <p className="text-sm mt-2 text-gray-500">© 2025 Tips Blog. All Rights Reserved.</p>
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">About Us</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">Contact</a>
          </div>

          {/* Right Side: Blog Categories */}
          <div className="flex flex-col mt-6 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Blog Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Technology</a></li>
              <li><a href="#" className="hover:text-blue-500">Health & Wellness</a></li>
              <li><a href="#" className="hover:text-blue-500">Lifestyle</a></li>
              <li><a href="#" className="hover:text-blue-500">Travel</a></li>
              <li><a href="#" className="hover:text-blue-500">Food & Recipes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
