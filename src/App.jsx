// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Section from "./pages/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  // Once signed in, show full site
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Section />
            <Blogs />
          </>
        }/>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
