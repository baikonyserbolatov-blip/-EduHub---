import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">EduHub</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/news">News</Link>
        {user ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
