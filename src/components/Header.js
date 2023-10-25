import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './Header.css'
import MobileMenu from './MobileMenu';

import { useState } from 'react';
// import PopupNav from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log(isMobileMenuOpen)
    };
    return (
        <div>

            {/* <MobileMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} /> */}
            {/* <PopupNav /> */}
            <div className='header-container'>
                <header className='header'>
                    <nav >
                        <ul className='header-list'>
                            <span>
                                <img src='/src/images/greenbook.jpeg'></img>
                            </span>
                            <li>
                                <Link className='custom-link' to="/">Home</Link>
                            </li>

                            <li>
                                <Link className='custom-link' to="/about">About</Link>
                            </li>
                            <li>
                                <Link className='custom-link' to="/contact">Contact-us</Link>
                            </li>
                            <li className='header-menu'>
                                <button onClick={toggleMobileMenu}>Menu</button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div>
                <MobileMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
            </div>
        </div>

    )

}

export default Header
