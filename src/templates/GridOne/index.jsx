import React from 'react';

export function GridOne() {
  return (
    <section id="grid-one" className="grid-one main-bg section">
      <div className="main-content grid-one-content">
        <h2 className="grid-main-heading">My Grid</h2>
        <p className="grid-description">A brief description.</p>

        <div className="grid">
          <article>
            <h3>Test 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molest.
            </p>
          </article>
          <article>
            <h3>Test 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molest.
            </p>
          </article>
          <article>
            <h3>Test 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molest.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
