import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>,
        <li>
          <Link to="/create">CREATE POST</Link>
        </li>,
        <li>
          <Link to="/myfollowingpost">MY FOLLOWING POSTS</Link>
        </li>,
        <li>
          <button
            className="btn #424242 grey darken-3"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/signin">SIGN IN</Link>
        </li>,
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
