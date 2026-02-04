import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../Components/Navbar.css";


export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate(); // for programmatic navigation
  // ✅ Check login status on page load

  useEffect(() => {

    const token = localStorage.getItem("token");

    setIsLoggedIn(!!token);

  }, []);



  function handleLogout() {

  localStorage.removeItem("token");

  localStorage.removeItem("user"); // ✅ ADD THIS

  window.location.href = "/home";

}

  function handleMenuClick(path) {
    setShowMenu(false); // close menu
    navigate(path); // go to page

  }
  return (
    <nav>
      <h2>

        Algo<span style={{ color: "rgb(234,118,63)" }}>Mate</span>

      </h2>



      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/practice">Practice</Link>

        {/* Profile Icon */}
        <div className="profile-container">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="dropdown">
              {isLoggedIn ? (
                <>
                  <p onClick={() => handleMenuClick("/profile")}>Profile</p>
                  <p onClick={handleLogout}>Logout</p>
                </>
              ) : (
                <>
                  <p onClick={() => handleMenuClick("/signup")}>Sign Up</p>
                  <p onClick={() => handleMenuClick("/login")}>Login</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}