import { useEffect, useState } from "react";
import "./App.css";
import DesktopFooter from "./components/DesktopFooter";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import MobileFooter from "./components/MobileFooter";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  return (
    <div
      className={`flex min-h-screen w-screen flex-col justify-between ${isMenuOpen && "overscroll-none"}`}
    >
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <MobileMenu />}
      <DesktopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogPost />} />
      </Routes>
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}

export default App;
