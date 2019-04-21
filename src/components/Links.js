import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <ul class="links">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
}

export default Links;
