import React from "react";
// import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <ul style={{textAlign:"right"}}>
        <li className="navbar-brand"><a href="/saved/" style={{color: "white"}}>Saved Books</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
