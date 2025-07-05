import Loader from "../components/Loader"; 
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import "../styles/Blogs.css"; 
const  GoogleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY;
const newsAPIKey = import.meta.env.VITE_NEWS_API_KEY;
export default function Blogs() {
  const [bloggerPosts, setBloggerPosts] = useState([]);
  const [newsPosts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    Promise.all([
      fetch(`https://www.googleapis.com/blogger/v3/blogs/10861780/posts?key=${GoogleAPIKey}`)
        .then(res => res.json())
        .then(data => {
          const posts = data.items || [];
          const filtered = posts
            .map((post) => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(post.content, "text/html");
              const img = doc.querySelector("img");
              const imgsrc = img?.getAttribute('src');
              if (!img || !imgsrc) return null;

              return {
                id: post.id,
                title: post.title,
                image: imgsrc,
                content: post.content,
                link: post.url,
                source: "Blogger"
              };
            })
            .filter(Boolean);
          setBloggerPosts(filtered);
        }),

      fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${newsAPIKey}`)
        .then(res => res.json())
        .then(data => {
          const articles = data.articles || [];
          const filtered = articles.filter(article => article.urlToImage)
            .map(article => ({
              id: btoa(article.url),
              title: article.title,
              image: article.urlToImage,
              link: article.url,
              source: "NewsAPI"
            }));
          setNewsPosts(filtered);
        })
    ]).finally(() => setLoading(false)); // when both fetch complete
  }, []);

  const allPosts = [...bloggerPosts, ...newsPosts];

  if (loading) return <Loader />; // ✅ show loader while loading

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        📰 Akash Google and News Blogs
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {allPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
          >
            <Link
              to={`/blog/${encodeURIComponent(post.id)}`}
              state={{ post }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "1rem",
                    color: "#333"
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#888" }}>
                  Source: {post.source}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
