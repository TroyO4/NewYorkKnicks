import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navbar.css"

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    NY
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/stats' className='nav-links' onClick={closeMobileMenu}>
                            Stats
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/standings' className='nav-links' onClick={closeMobileMenu}>
                            Standings
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
