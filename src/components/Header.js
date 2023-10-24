import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './Header.css'
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log(isMobileMenuOpen)
    };
    return (
        <div className='header-container'>
            <header className='header'>
                <nav >
                    <ul className='header-list'>
                        <span>
                            <img src='/src/images/greenbook.jpeg'></img>
                        </span>

                        <li>
                            <Link className='custom-link' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='custom-link' to="/contact">Contact-us</Link>
                        </li>
                    </ul>
                    <ul className='header-list'>
                        <li>
                            <Link className='custom-link' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='custom-link' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='custom-link' to="/contact">Contact-us</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={toggleMobileMenu}>Toggle Mobile Menu</button>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
        </div>
    )

}

export default Header
