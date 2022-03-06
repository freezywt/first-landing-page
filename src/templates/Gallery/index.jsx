import React from 'react';

import { Footer } from '../../components/Footer/index';
import gallery from '../../Assets/img/gallery.jpeg';

export function Gallery() {
  return (
    <section id="gallery" className="grid-one white-bg section">
      <div className="main-content grid-one-content">
        <h2 className="grid-main-heading">Gallery</h2>
        <p className="grid-description">One brief description</p>

        <div className="grid">
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
          <div className="gallery-img">
            <img src={gallery} alt="a brief from bridge" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
