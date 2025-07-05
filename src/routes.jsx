import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
// import Services from './pages/Services'

const routes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/Services" element={<Services />} /> */}
    </Routes>
  )
}

export default routes