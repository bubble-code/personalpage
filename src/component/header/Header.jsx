/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Scrollspy from 'react-scrollspy';
import logoSrc from '../../assets/images/logo/logo.png';
import SocialShare from './socialShare';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Header({ homeLink, color }) {
  useEffect(() => {
    const header = document.querySelector('header');
    function handleScroll() {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const logoUrl = (
    <img
      style={{ width: '30px', opacity: 0.8 }}
      src={logoSrc}
      alt="Digital Agency"
    />
  );
  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className="mainmenu"
              items={[
                'home',
                'about',
                'service',
                'portfolio',
                'blog',
                'contact',
              ]}
              currentClassName="is-current"
              offset={-200}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              {/* <li>
                  <a href="#blog">Blog</a>
                </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <li key={i}>
                  <a href={`${val.link}`}>{val.Social}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="header-btn">
              <a className="rn-btn" href="#contact">
                <span>Contact me</span>
              </a>
            </div> */}
          {/* Start Humberger Menu  */}

          {/* End Humberger Menu  */}

        </div>
      </div>
    </header>
  );
}

export default Header;
