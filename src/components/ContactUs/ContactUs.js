import React, { useState , useEffect } from 'react';
import './ContactUs.css'; // Retain your original contact CSS file
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { ClipLoader } from 'react-spinners';

const ContactUs = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [concern, setConcern] = useState('');
  const [queryNumber, setQueryNumber] = useState(1); // Initialize query number
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique ID for the query
    const uniqueId = `query_${name.replace(/\s+/g, '_').toLowerCase()}_query_${queryNumber}`;

    // Check if any fields are empty
    if (!phone || !name || !email || !concern) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      // Add new entry to Firestore
      await addDoc(collection(db, 'contacts'), {
        phone,
        name,
        email,
        concern,
        uniqueId,
        createdAt: new Date(),
      });

      // Send email notification using EmailJS
      await emailjs.send('service_0isgodd', 'template_lg8kv1o', {
        phone,
        name,
        email,
        concern,
        uniqueId,
      }, 'kwWlF9HP_LQ3slrt9');

      // Clear form after submission
      setPhone('');
      setName('');
      setEmail('');
      setConcern('');

      // Increment query number for next submission
      setQueryNumber(queryNumber + 1);

      alert('Your response has been submitted successfully, and a copy has been sent to your email!');
    } catch (error) {
      console.error('Error adding document or sending email: ', error);
      alert('There was an error submitting your response.');
    }

    setLoading(false); // Stop loading spinner
  };
  useEffect(() => {
    // Apply background color when the component is mounted
    document.body.style.backgroundColor = '#202022';

    // Cleanup: Revert the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className='body-cont'>
    <div className="contact-container">
    <div className='imgfd'>
    <img className='fdlogo' src='./images/Logo.svg' alt='Logo'></img></div>
      <h2 className='h21'>Contact Us</h2>
      <section>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="phone"
          placeholder="Enter Your Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-input"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-input"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="form-input"
          name="concern"
          cols="30"
          rows="10"
          placeholder="Please Elaborate your Concern"
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          required
        />
        <button type="submit" className="sub-btn" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#ffffff"} /> : 'Submit Response'}
        </button>
      </form>
      </section>
  
      
      <footer className="footer-feed">
        <p>&copy; 2024 PCCOE VirtuoNavi - All Rights Reserved</p>
      </footer>
    </div>
    </div>



    
  );
};

export default ContactUs;
