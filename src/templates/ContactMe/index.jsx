import React from 'react';

export function ContactMe() {
  return (
    <section id="contact" className="intro main-bg section">
      <div className="main-content intro-content">
        <div className="contact-form">
          <fieldset className="form-grid">
            <div className="form-group">
              <label htmlFor="first-name">First name</label>
              <input type="text" name="first-name" id="first-name" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">last name</label>
              <input type="text" name="last-name" id="last-name" placeholder="Your last name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="Your e-mail" />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" />
            </div>

            <div className="form-group full-width">
              <button type="submit" onClick={() => alert('You email is sended!')}>Send message</button>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
