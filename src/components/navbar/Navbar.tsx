"use client";

import { usePathname } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";
import TransitionLink from "../TransitionLink";

type NavItem = {
  name: string;
  path: string;
};

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
    scrollTop();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    toggleMenu();
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    const baseStyles =
      "text-White xl:py-3.5 md:py-3 transition-all ease-in-out duration-1000";
    const activeStyles = "bg-Grey-08 border-Grey-15 md:px-5 xl:px-6 rounded-lg";
    const inactiveStyles = "border-Grey-10";

    return isActive
      ? `${baseStyles} ${activeStyles}`
      : `${baseStyles} ${inactiveStyles}`;
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed md:hidden top-0 left-0 w-screen h-screen bg-Grey-10 opacity-60 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <nav
        className={`fixed left-0 top-0 w-full xl:h-[99px] md:h-[77px] z-[1000] flex justify-between items-center px-4 md:px-[5.5555%] xl:px-[8.4375%] xl:py-0 md:py-0 py-5 bg-Grey-10 shadow transition-all duration-300 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]`}
      >
        <h1
          className="cursor-pointer font-comfortaa text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium"
          onClick={() => {
            scrollTop();
          }}
        >
          <TransitionLink href="/">Younis Issa</TransitionLink>
        </h1>

        <div className="hidden md:flex gap-6 xl:text-lg items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathName === link.path ||
              (pathName.startsWith(link.path) && link.path !== "/");
            return (
              <TransitionLink
                key={link.path}
                href={link.path}
                className={navLinkStyles({ isActive })}
                onClick={scrollTop}
              >
                {link.name}
              </TransitionLink>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <ThemeButton />
        </div>

        <div
          className="md:hidden flex justify-center items-center w-7 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-[21px] h-[14px] flex flex-col justify-between items-center">
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[6px] bg-White" : "bg-White"
              }`}
            />
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "bg-White"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-[-45deg] -translate-y-[6px] w-full bg-White"
                  : "w-[54%] self-end bg-White"
              }`}
            />
          </div>
        </div>
      </nav>

      <aside
        className={`fixed right-0 top-0 h-screen w-1/2 bg-Grey-10 z-50 transform transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] md:hidden  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="mt-[68.58px] flex flex-col items-start">
          {navLinks.map(({ name, path }) => {
            const isActive =
              pathName === path || (pathName.startsWith(path) && path !== "/");
            return (
              <TransitionLink
                key={path}
                href={path}
                onClick={toggleMenu}
                className={`w-full p-5 text-White ${
                  isActive ? "border-l-2 border-Green-75/80 font-semibold" : ""
                }`}
              >
                {name}
              </TransitionLink>
            );
          })}
          <div className="p-5 w-full">{isMenuOpen && <ThemeButton />}</div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
