import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/uiSlice';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="header container">
      <div className="header--top">
        <a className="logo" href="#">
          <img src="./images/logo.svg" alt="logo" />
        </a>

        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="menu--list">
            <li className="menu--list-item">
              <a className="menu--list-link" href="#">
                About
              </a>
            </li>
            <li className="menu--list-item">
              <a className="menu--list-link" href="#">
                Discover
              </a>
            </li>
            <li className="menu--list-item">
              <a className="menu--list-link" href="#">
                Get Started
              </a>
            </li>
          </ul>
        </nav>

        <button className="hamburger" onClick={handleMenuToggle}></button>
      </div>
    </header>
  );
};

export default Header;
