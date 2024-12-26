import { useEffect, useState } from "react";
import "./App.css";
import DesktopFooter from "./components/DesktopFooter";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import MobileFooter from "./components/MobileFooter";

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
      {isMenuOpen && <MobileMenu/>}
      <DesktopNavbar />
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}

export default App;
