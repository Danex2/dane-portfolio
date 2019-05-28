import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="nav-container">
            <ul class="nav">
                <li class="nav-item"><Link to="/">Home</Link></li>
                <li class="nav-item"><Link to="/projects">Projects</Link></li>
                <li class="nav-item"><Link to="/skills">Skills</Link></li>
                <li class="nav-item"><a href="https://dane-blog.netlify.com">Blog</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
