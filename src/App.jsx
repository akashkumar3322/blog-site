// src/App.jsx

import { Routes, Route } from "react-router-dom";
import { useUser, SignIn } from "@clerk/clerk-react";

import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Section from "./pages/Section";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const { isSignedIn, isLoaded } = useUser();

  // Wait for Clerk to load user info
  if (!isLoaded) return null;

  // If not signed in, only show Clerk's Sign In form
  if (!isSignedIn) {
    return (<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "1rem",
  backgroundColor: "#f8f9fa"
}}>
  <SignIn
    routing="path"
    path="/sign-in"
    appearance={{
      elements: {
        card: {
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px"
        }
      }
    }}
  />
</div>)}

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
