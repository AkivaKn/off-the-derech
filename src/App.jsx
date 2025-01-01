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
import Contact from "./pages/Contact";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { setOffScreen } from "./lib/utils";
import { getBlogPosts, getHomePage, getResourcePage } from "./api/content";
import { home } from "./lib/homePage";
import { blogs } from "./lib/blog";
import { resource } from "./lib/resources";
gsap.registerPlugin(useGSAP);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTween] = useState(gsap.timeline({ paused: true }));
  const [homePage, setHomePage] = useState({});
  const [blogPosts, setBlogPosts] = useState([]);
  const [resourcePage, setResourcePage] = useState({ resource_categories: [] });
  const [loadingHome, setLoadingHome] = useState(true);
  const [loadingBlogPosts, setLoadingBlogPosts] = useState(true);
  const [loadingResources, setLoadingResources] = useState(true);
  const menuRef = useRef();
  useEffect(() => {
    // getHomePage().then((data) => {
    //   setHomePage(data);
    //   setLoadingHome(false);
    // });
    setHomePage(home);
    setLoadingHome(false);
    // getBlogPosts().then((data) => {
    //   setBlogPosts(data);
    //   setLoadingBlogPosts(false);
    // });
    setBlogPosts(blogs);
    setLoadingBlogPosts(false);
    // getResourcePage().then((data) => {
    //   setResourcePage(data);
    //   setLoadingResources(false)
    // });
    setResourcePage(resource);
    setLoadingResources(false);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  useGSAP(() => {
    menuTween
      .from(menuRef.current, {
        x: (i, t) => {
          return setOffScreen(t);
        },
        duration: 1,
      })
      .reverse();
  });
  const toggleMenu = function () {
    menuTween.reversed(!menuTween.reversed());
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex min-h-screen w-screen flex-col justify-between overflow-x-hidden ${isMenuOpen && "overscroll-none"}`}
    >
      <MobileHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuRef={menuRef} />
      <div className="h-[92px] lg:hidden"></div>
      <DesktopNavbar />
      <div className="hidden h-[12vh] lg:block"></div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homePage={homePage}
              blogPosts={blogPosts}
              loadingHome={loadingHome}
            />
          }
        />
        <Route
          path="/resources"
          element={
            <Resources
              resourcePage={resourcePage}
              loadingResources={loadingResources}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog blogPosts={blogPosts} loadingBlogPosts={loadingBlogPosts} />
          }
        />
        <Route
          path="/blog/:blogId"
          element={<BlogPost blogPosts={blogPosts} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}

export default App;
