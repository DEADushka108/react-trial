import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="page-header page-header--active">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className="page-header__logo">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="24" r="16" fill="#316099"/>
            <circle cx="32" cy="24" r="15" fill="white" stroke="#316099" strokeWidth="2"/>
            <path d="M39.3 30L34.38 16H30.96L26.06 30H29.04L29.88 27.48H35.46L36.3 30H39.3ZM32.68 19.18L34.6 24.9H30.76L32.68 19.18Z" fill="#316099"/>
          </svg>
        </Link>
        <nav className="main-nav">
          <button className="main-nav__toggle main-nav__toggle--close main-nav__toggle--nojs" type="button">
            <span className="visually-hidden">Open menu</span>
            <svg className="main-nav__humburger-icon" width="32" height="32">
              <use xlinkHref="#icon-burger"/>
            </svg>
            <svg className="main-nav__close-icon" width="30" height="30">
              <use xlinkHref="#icon-menu-cross"/>
            </svg>
          </button>
          <ul className="main-nav__list main-nav__list--open">
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link main-nav__link--active">Main</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.FORM} className="main-nav__link">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;