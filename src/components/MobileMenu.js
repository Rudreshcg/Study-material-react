import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, closeMenu }) {
    console.log(isOpen);
    return (
        <div className={`mobile-menu${isOpen ? '-open' : ''}`}>
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


// import React, { useState } from 'react';
// import './Header'; // Import your CSS file

// function PopupNav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="popup-nav">
//       <button className="menu-button" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </div>
//   );
// }

// export default PopupNav;
