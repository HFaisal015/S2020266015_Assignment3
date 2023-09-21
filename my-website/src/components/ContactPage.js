// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Create ContactPage.css for styling
import Navbar from './Navbar';

function ContactPage() {
  return (
    <div>
      <Navbar/>

    <div className="contact">
    <h1>Contact Information</h1>
    <form>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className="form-group">
        <label>Contact Number:</label>
        <input type="tel" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

    </div>
  )
}

export default ContactPage
