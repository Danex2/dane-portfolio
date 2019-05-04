import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <ul className="links">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <a
          href="https://dane-blog.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </li>
    </ul>
  );
}

export default Links;
