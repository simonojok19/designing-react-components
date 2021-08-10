import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { withAuth } from "./withAuth";

const LoggedIn = ({ user, setUser }) => {
  return (
    <div>
      <span>Logged in as {user}</span>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setUser("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

const NotLoggedIn = ({ user, setUser }) => {
  return (
    <button
      className="btn btn-secondary"
      onClick={(event) => {
        event.preventDefault();
        const username = window.prompt("Enter Login Name: ", "");
        setUser(username);
      }}
    >
      Login
    </button>
  );
};

const Header = ({ user, setUser }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/SVCCLogo.png" alt="SVCC Home Page" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {user && user.length > 0 ? (
              <LoggedIn user={user} setUser={setUser} />
            ) : (
              <NotLoggedIn user={user} setUser={setUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Header);
