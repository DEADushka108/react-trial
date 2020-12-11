import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
    <div className="page-footer__wrapper">
      <div className="page-footer__outro">
        <h2 className="page-footer__title">Intersted to work with our team?</h2>
        <p className="page-footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <a className="page-footer__button button" href="form.html">Let’s Talk</a>
      </div>
      <div className="page-footer__contacts-wrapper">
        <div className="page-footer__contacts contacts">
          <h3 className="contacts__title">
            <a className="contacts__logo">
              <svg className="contacts__logo-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="24" r="16" fill="#98C3E8"/>
                <circle cx="32" cy="24" r="15" fill="white" stroke="#316099" strokeWidth="2"/>
                <path d="M38.3 31L33.38 17H29.96L25.06 31H28.04L28.88 28.48H34.46L35.3 31H38.3ZM31.68 20.18L33.6 25.9H29.76L31.68 20.18Z" fill="#316099"/>
              </svg>
            Afrianska  
            </a>
          </h3>
          <ul className="contacts__list">
            <li className="contacts__item">
              <span>A.</span>
              <a className="contacts__link" href="https://goo.gl/maps/aQevuiyBgLhBuWMQA">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </a>
            </li>
            <li className="contacts__item">
              <span>T.</span>
              <a className="contacts__link" href="tel:+6281273134321">
                +62-812-7313-4321
              </a>
            </li>
            <li className="contacts__item">
              <span>E.</span>
              <a className="contacts__link" href="hello.afrian@gmail.com">
                hello.afrian@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="page-footer__about-us about-us">
          <h3 className="about-us__title">About <span className="about-us__text about-us__text--uppercase">us</span></h3>
          <ul className="about-us__list">
            <li className="about-us__item">
              <a className="about-us__link" href="#">
                About
              </a>
            </li>
            <li className="about-us__item">
              <a className="about-us__link" href="#">
                What We Do
              </a>
            </li>
            <li className="about-us__item">
              <a className="about-us__link" href="#">
                Project
              </a>
            </li>
            <li className="about-us__item">
              <a className="about-us__link" href="#">
                How It Work With Us
              </a>
            </li>
          </ul>
        </div>
        <div className="page-footer__social social">
          <h3 className="social__title">Follow <span className="about-us__text about-us__text--uppercase">us</span></h3>
          <ul className="social__list">
            <li className="social__item">
              <a className="social__link" href="#">
                Instagram
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href="#">
                Facebook
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href="#">
                LinkedIn
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href="#">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-footer__copyright">
        <p className="page-footer__text">2019 © Afrianska. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer;