import React, { useState, useEffect } from 'react'; 
import emailjs from 'emailjs-com';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Apply background color when the component is mounted
    document.body.style.backgroundColor = '#202022';

    // Cleanup: Revert the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_2zge616', 
      'template_f8opq3v', 
      e.target, 
      'kwWlF9HP_LQ3slrt9'
    ).then((result) => {
      alert('Feedback successfully sent!');
    }).catch((error) => {
      console.error(error.text);
    });
    e.target.reset();
  };

  return (
    
    <div className="body-cont">  
    <div className="feedback-container">
    <div className='imgfd'>
    <img className='fdlogo' src='./images/Logo.svg' alt='Logo'></img></div>
      <h2 className='h21'>We'd Love Your Feedback</h2>
      <form onSubmit={sendEmail} className="feedback-form">
        <input
          type="text"
          className="form-input"
          name="user_name"
          placeholder="Enter Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-input"
          name="user_email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          className="form-input"
          name="message"
          placeholder="Your Feedback"
          rows="6"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
      <footer className="footer-feed">
        <p>&copy; 2024 PCCOE VirtuoNavi - All Rights Reserved</p>
      </footer>
    </div>
    </div>
  );
};

export default Feedback;
