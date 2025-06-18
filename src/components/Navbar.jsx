import '../styles/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="#about">About</a></li>
                    <li className="navbar-item"><a href="#services">Services</a></li>
                    <li className="navbar-item"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
    }

export default Navbar;