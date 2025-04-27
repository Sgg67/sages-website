import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar'>
        <div className = "links">
        <Link to="/projects">Projects</Link>
        <a href="./Resume.pdf">Resume</a>
        <a href="https://github.com/Sgg67">Github</a>
        </div>
        </nav>
    );
};

export default NavBar;