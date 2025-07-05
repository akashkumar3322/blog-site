import '../styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>📰 NewsBlog</h2>
          <p>Stay informed with reliable, AI-curated news content.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@newsblog.com</p>
          <p>Phone: +92-123-4567890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NewsBlog | Powered by NewsAPI</p>
      </div>
    </footer>
  );
}
