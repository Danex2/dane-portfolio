import React from "react";
import Sky from "../images/sky.jpg";

function Sidebar() {
  return (
    <div className="sidebar" style={{ backgroundImage: `url(${Sky})` }}>
      <h1>Hi, I'm Dane!</h1>
      <p>I enjoy making fast and responsive web apps.</p>
    </div>
  );
}

export default Sidebar;
