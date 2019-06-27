import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-container'>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='nav-item'>
          <Link to='/skills'>Skills</Link>
        </li>
        <li className='nav-item'>
          <a href='https://dane-blog.netlify.com'>Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
