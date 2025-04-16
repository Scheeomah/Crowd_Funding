
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/uiSlice';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  return (
    <>
      <button
        className={`hamburger ${isMenuOpen ? 'close-menu' : ''}`}
        onClick={() => dispatch(toggleMenu())}
      ></button>

      {isMenuOpen && (
        <ul className="menu--list">
          <li className="menu--list-item">
            <a className="menu--list-link" href="#">About</a>
          </li>
          <li className="menu--list-item">
            <a className="menu--list-link" href="#">Discover</a>
          </li>
          <li className="menu--list-item">
            <a className="menu--list-link" href="#">Get Started</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default HamburgerMenu;
