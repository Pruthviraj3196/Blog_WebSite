import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!token) return null; // Don't show navbar if not logged in

  return (
    <nav className="bg-gray-400 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold cursor-pointer" >
        LOGO
      </div>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/create')}
          className="hover:underline"
        >
          Create Blog
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
