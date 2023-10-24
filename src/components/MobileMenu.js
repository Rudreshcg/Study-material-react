import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, closeMenu }) {
    console.log(isOpen);
    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>Contact-us</Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;