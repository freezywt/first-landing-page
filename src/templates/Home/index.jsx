import React from 'react';

import hero from '../../Assets/img/javascript-not-optimized.svg';

import { Footer } from '../../components/Footer/index';

export function Home() {
  return (
    <div>
      <section id="home" className="intro main-bg section">
        <div className="main-content intro-content">
          <div className="intro-text-content">
            <h2>January brings us Firefox 85</h2>
            <p>To wrap up January, we are proud to bring you the release of Firefox 85. </p>
            <p> In this version we are bringing you support for the :focus-visible pseudo-class </p>
            <p>in CSS and associated devtools, and the complete removal of Flash support from</p>
          </div>
          <div className="intro-img">
            <img src={hero} alt="javascript" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
