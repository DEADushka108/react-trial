import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Главная страница тестового задания</h1>
      <div className="page-main__wrapper">
        <section className="intro">
          <h2 className="intro__title">New Automation Tool for Your Home</h2>
          <p className="intro__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
          <a className="intro__button button" href="#">See Our Project</a>
        </section>
        <section className="advantages">
          <h2 className="advantages__title">What we do to help our client grow in digital era?</h2>
          <ul className="advantages__list">
            <li className="advantages__item">
              <article className="advantages__notice">
                <h3 className="advantages__item-title">
                  Make Your business To Be
                  Better Famous In Internet
                </h3>
                <p className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <a className="advantages__link" href="#">
                  Learn more
                  <svg className="advantages__link-icon" width="16" height="16">
                    <use xlinkHref="#icon-right-arrow"></use>
                  </svg>
                </a>
              </article>
            </li>
            <li className="advantages__item">
              <article className="advantages__notice">
                <h3 className="advantages__item-title">
                  Bring Technology To Your 
                  Comfrotable Home
                </h3>
                <p className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <a className="advantages__link" href="#">
                  Learn more
                  <svg className="advantages__link-icon" width="16" height="16">
                    <use xlinkHref="#icon-right-arrow"></use>
                  </svg>
                </a>
              </article>
              <article className="advantages__notice">
                <h3 className="advantages__item-title">
                  Build Your Digital Product
                  That Suitable For Your Need
                </h3>
                <p className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <a className="advantages__link" href="#">
                  Learn more
                  <svg className="advantages__link-icon" width="16" height="16">
                    <use xlinkHref="#icon-right-arrow"></use>
                  </svg>
                </a>
              </article>
            </li>
          </ul>
        </section>
        <section className="partners">
          <div className="partners__wrapper">
            <h2 className="partners__title">Our Beloved Client</h2>
            <p className="partners__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <ul className="partners__list">
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 1
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 2
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 3
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 4
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 5
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 6
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                logo client 7
              </a>
            </li>
            <li className="partners__item">
              <a className="partners__link" href="#">
                More Client
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <Footer/>

  </Fragment>
}

export default Main;
