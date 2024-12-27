import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { navLinks } from "../lib/navLinks";
export default function DesktopNavbar() {
  return (
    <header className="sticky top-0 z-10 hidden w-full items-center justify-between bg-white px-12 h-[12vh] lg:flex xl:px-16 2xl:px-20">
      <Link to={"/"}>
        <img src={logo} className="h-[5vh]" alt="website logo" />
      </Link>
      <ul className="flex gap-4 xl:gap-6 2xl:gap-8">
        {navLinks.map((link, index) => {
          return (<li key={index}>
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `${isActive && "text-hoverColor"} text-base text-primaryColor hover:text-hoverColor xl:text-lg 2xl:text-xl`
              }
            >
              {link.title}
            </NavLink>
          </li>)
        })}
      </ul>
    </header>
  );
}
