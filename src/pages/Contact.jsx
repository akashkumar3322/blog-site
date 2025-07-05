import React from 'react';
import '../styles/Contact.css'; 
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// CSS file hum next step mein banayenge

export default function Contact(){
  return (
    <motion.section className="contact-section"
             initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}>
      <motion.div className="contact-container">
        <h2>📬 Get in Touch</h2>
        <p>Feel free to contact me by filling the form below.</p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );
};


