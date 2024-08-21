import React from 'react';
import '../components/css/Contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact Us!</h1>
      <p>Reach out about feedback, to partner, or anything else</p>
      <p className='email'>Email: adalaitejeda@gmail.com</p>
      <form>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <input type='text' placeholder='Subject' required />
        <textarea placeholder='Message' rows='5' required></textarea>
        <div className='button-container'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;