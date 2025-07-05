import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import  { motion }  from 'framer-motion';
import '../styles/Section.css';

const words = ['NewsBlogs', 'Google Blogs'];

const Section = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        const updated = currentWord.substring(0, displayText.length + 1);
        setDisplayText(updated);

        if (updated === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const updated = currentWord.substring(0, displayText.length - 1);
        setDisplayText(updated);

        if (updated === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting , currentWordIndex]);

  return (
    <section className="blogs-intro">
      <div className="container">
        {/* Heading fade-in animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          📰 Welcome to <span className="auto-writer">{displayText}</span>
          <span className="cursor">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Stay updated with the latest news, tech trends, tutorials, and insightful blogs curated just for you.<br />
          Explore handpicked articles that <strong>inform, inspire, and empower.</strong>
        </motion.p>
      </div>
    </section>
  );
};

export default Section;
