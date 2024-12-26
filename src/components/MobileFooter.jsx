import { NavLink } from "react-router";
import { footerLinks } from "../lib/navLinks";

export default function MobileFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-primaryColor pb-2 pt-4 lg:hidden">
      <ul className="flex gap-2">
        {footerLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `${isActive && "text-cardColor"} text-sm text-secondaryColor`
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-secondaryColor">
        Copyright &copy; 2024 Off The Derech
      </p>
    </footer>
  );
}
