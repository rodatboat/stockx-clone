import "./Nav.css";
import { FaRegBell, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="navbar-component">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span>StockX</span>
          </div>
          <div className="navbar-search">
            <FaSearch />
            <input
              type="search"
              title="Search..."
              placeholder="Search for brand, color, etc."
            ></input>
          </div>
          <div className="navbar-links">
            <span className="navbar-link">Browser</span>
            <span className="navbar-link">News</span>
            <span className="navbar-link">About</span>
            <span className="navbar-link">Help</span>
            <span className="navbar-link">Sell</span>
            <span className="navbar-link">
              <FaRegBell />
            </span>
            <span className="navbar-link">
              <button className="login-button">Login</button>
            </span>
            <span className="navbar-link">
              <button className="signup-button">Sign Up</button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
