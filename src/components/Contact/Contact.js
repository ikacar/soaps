import React from 'react';
import '../../App.css';

function Contact() {
  return (  
    <section className="contact">
        <div className="contact-info">
            <div className="contact-header">
                contact
            </div>
      <div className="contact-address">
             adresa
      </div>
      <div className="contact-working-hours">
            workinig hours
      </div>
      <div className="contact-phone">
            phone
      </div>
      <div className="contact-message">
        <div className="message-name">
            name
        </div>
        <div className="message-phone">
            phone
        </div>
        <div className="message-email">
            email
        </div>
        <div className="message-text">
            message
        </div>
      </div>
    </div>
    <div className="contact-map">
        map
    </div>
</section>
);
}

export default Contact;

