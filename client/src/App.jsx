import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import Footer from "./components/Footer";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      {token && <Navbar />} {/* ✅ Show Navbar only if logged in */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/blogs"
          element={token ? <BlogList /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={token ? <CreateBlog /> : <Navigate to="/login" />}
        />
      </Routes>
      {token && <Footer />}
    </Router>
  );
}

export default App;
