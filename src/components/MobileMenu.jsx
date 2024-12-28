import { NavLink } from "react-router";
import { navLinks } from "../lib/navLinks";

export default function MobileMenu() {
  return (
    <nav className="fixed inset-0 z-30 h-screen w-screen bg-backgroundColor p-6 sm:px-8 md:px-10 lg:hidden">
      <ul className="mt-28 flex flex-col gap-6 sm:gap-8 md:gap-10">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `${isActive ? "text-hoverColor" : "text-primaryColor"} text-lg uppercase sm:text-xl md:text-2xl`
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
