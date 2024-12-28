import { NavLink } from "react-router";
import { footerLinks } from "../lib/navLinks";

export default function DesktopFooter() {
  return (
    <footer className="hidden h-[20vh] w-full flex-col items-center justify-between bg-primaryColor pb-[2vh] pt-[5vh] lg:flex">
      <ul className="flex gap-4 xl:gap-6 2xl:gap-8">
        {footerLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `${isActive ? "text-cardColor" : "text-secondaryColor"} text-base hover:text-cardColor xl:text-lg 2xl:text-xl`
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <p className="text-base text-secondaryColor xl:text-lg 2xl:text-xl">
        Copyright &copy; 2024 Off The Derech
      </p>
    </footer>
  );
}
