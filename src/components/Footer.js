import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://twitter.com/hybridearth"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter" />
            @hybridearth
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Danex2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github" />
            Danex2
          </a>
        </li>
        <li>
          <a
            href="mailto:khadane.miller@gmail.com?subject=Hello!"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fas fa-envelope" />
            Email me!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
