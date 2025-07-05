import "../styles/About.css";
import akashImage from '../assets/akash-dev.ico';
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  const [img, setImg] = useState(null);

  return (
    <div className="about-container">
      {/* Profile Image with animation */}
      <motion.div
        className="about-image"
        onClick={() => setImg(akashImage)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={akashImage} alt="Akash" />
      </motion.div>

      {/* Text section with animation */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          👋 Hello, I'm Akash!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I'm a passionate Frontend Developer and tech enthusiast. I created this blog site to share valuable content, latest news, and learning experiences with the world.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I enjoy exploring JavaScript, React, and creating beautiful user interfaces. Whether it's building projects or writing blogs, I love turning ideas into digital reality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Feel free to explore the site and connect with me if you'd like to collaborate or just say hi!
        </motion.p>
      </motion.div>

      {/* Overlay full image on click */}
      {img && (
        <motion.div
          className="overlay"
          onClick={() => setImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={akashImage}
            alt="akash"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </div>
  );
}
