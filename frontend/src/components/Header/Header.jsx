import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <h1>🚀 AI CV Assistant</h1>
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <button className="header__btn">Login</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
