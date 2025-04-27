import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="links">
        <Link to="/">Home</Link> {/* Add this */}
        <Link to="/projects">Projects</Link>
        <a href="./Resume.pdf">Resume</a>
        <a href="https://github.com/Sgg67">Github</a>
        <a href="https://www.linkedin.com/in/sage-yanoff-751b8516b/">Linkedin</a>
      </div>
    </nav>
  );
};

export default NavBar;