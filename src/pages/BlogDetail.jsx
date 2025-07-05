import { useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import '../styles/BlogDetail.css';

export default function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Post not found</h2>
        <button onClick={() => navigate("/")}>⬅ Go Back</button>
      </div>
    );
  }

  return (
    <motion.div
      className="blog-detail-container"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Blog Image */}
      <motion.img
        src={post.image}
        alt={post.title}
        className="blog-detail-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Blog Title */}
      <motion.h2
        className="blog-detail-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {post.title}
      </motion.h2>

      {/* Source */}
      <motion.p
        className="blog-detail-source"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Source: {post.source}
      </motion.p>

      {/* Blog Content */}
      <motion.div
        className="blog-detail-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* External Link */}
      <motion.a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-detail-link"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        🔗 View on Original Site
      </motion.a>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="blog-detail-back-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        ⬅ Go Back
      </motion.button>
    </motion.div>
  );
}
