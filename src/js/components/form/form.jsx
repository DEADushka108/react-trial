import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Form = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <div className="page-main__intro">
          <h1 className="page-main__title">Contact Us</h1>
          <p className="page-main__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="page-main__contacts-wrapper">
          <section className="main-contacts">
            <h2 className="visually-hidden">Our contacts</h2>
            <ul className="main-contacts__list">
              <li className="main-contacts__item">
                <p className="main-contacts__text">Adress</p>
                <a className="main-contacts__link" href="https://goo.gl/maps/aQevuiyBgLhBuWMQA">
                  Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
                </a>
              </li>
              <li className="main-contacts__item">
                <p className="main-contacts__text">Phone</p>
                <ul className="main-contacts__phone">
                  <li>
                    <a className="main-contacts__link" href="tel:+6281273134321">
                      <svg className="main-contacts__phone-icon" width="24" height="24" >
                        <use xlinkHref="#icon-phone"></use>
                      </svg>
                      +62-812-7313-4321
                    </a>
                  </li>
                  <li>
                    <a className="main-contacts__link" href="tel:+628170001234">
                      <svg className="main-contacts__phone-icon" width="24" height="24">
                        <use xlinkHref="#icon-phone"></use>
                      </svg>
                      +62-817-000-1234
                    </a>
                  </li>
                </ul>
              </li>
              <li className="main-contacts__item">
                <p className="main-contacts__text">Online service</p>
                <ul className="main-contacts__service">
                  <li className="main-contacts__service-item">
                    <a className="main-contacts__link" href="www.afrianska.com">
                      <svg className="main-contacts__web-icon" width="20" height="20">
                        <use xlinkHref="#icon-web"></use>
                      </svg>
                      www.afrianska.com
                    </a>
                  </li>
                  <li className="main-contacts__service-item">
                    <a className="main-contacts__link" href="mailto:hello.afrian@gmail.com">
                      <svg className="main-contacts__mail-icon" width="20" height="16">
                        <use xlinkHref="#icon-mail"></use>
                      </svg>
                      hello.afrian@gmail.com
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="feedback">
            <h2 className="feedback__title">Send us message</h2>
            <form className="feedback__form" action="#" method="GET">
              <fieldset className="feedback__item user-info">
                <legend className="visually-hidden">Introduce yourself an write us some word</legend>
                <p className="user-info__item">
                  <label className="user-info__label" htmlFor="user-name">Full name</label>
                  <input className="user-info__input" id="user-name" type="text" name="full-name" placeholder="Your Name" required/>
                </p>
                <p className="user-info__item">
                  <label className="user-info__label" htmlFor="user-email">Email</label>
                  <input className="user-info__input" id="user-email" type="email" name="email" placeholder="Your Email" required/>
                </p>
                <p className="user-info__item">
                  <label className="user-info__label" htmlFor="comment-field">Message</label>
                  <textarea className="user-info__input" name="comment" id="comment-field" rows="5" placeholder="Your Message"></textarea>
                </p>
              </fieldset>
              <button className="feedback__button button" type="submit">Submit</button>
            </form>
          </section>
        </div>
        <section className="map">
          <h2 className="visually-hidden">Our adress on map</h2>
          <iframe
            className="map__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6628123186197!2d-74.16294558459398!3d40.74744447932801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbed8431ee6a592d1!2sB-52&#39;s!5e0!3m2!1sru!2sru!4v1606196962482!5m2!1sru!2sru"
            allowFullScreen=""
            title="Company on map">
          </iframe>
        </section>
      </div>
    </main>

    <Footer/>

  </Fragment>
}

export default Form;
