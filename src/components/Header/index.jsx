import React from 'react';

export function Header() {
  return (
    <div>
      <input id="close-menu" className="close-menu" type="checkbox" aria-label="Close menu" role="button" />
      <header className="menu white-bg">
        <div className="main-content menu-content">
          <h1>
            <a href="#home">LOGO</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#intro">intro</a>
              </li>
              <li>
                <a href="#grid-one">grid-one</a>
              </li>
              <li>
                <a href="#gallery">gallery</a>
              </li>
              <li>
                <a href="#grid-two">grid-two</a>
              </li>
              <li>
                <a href="#pricing">pricing</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>

  );
}
