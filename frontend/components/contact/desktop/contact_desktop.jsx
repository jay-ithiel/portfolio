import React from 'react';
import ContactIcons from '../contact_icons';

const ContactDesktop = () => (
  <div className='desktop'>
    <div className='contact-container'>
      <h3 className='title' id='projects-title'>GET IN TOUCH</h3>

      <div className='contact-text'>
        <p>I'm looking for new opportunities and would love to chat.</p>
        <p>If you're interested in working together, please reach out!</p>
      </div>

      <ContactIcons desktop={ true } />
    </div>
  </div>
);

export default ContactDesktop;
