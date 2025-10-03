"use client";
import Link from "next/link";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";
// import { NavLink } from "react-router-dom";
// import { FaBarsStaggered } from "react-icons/fa6";

// const NavLinks: { name: string; href: string }[] = [
//   { name: "About", href: "/about" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];
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
  //     const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [showBanner, setShowBanner] = useState<boolean>(true);

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
//     <nav className={`fixed top-0 left-0 w-full h-14 flex justify-between items-center bg-red-500 px-30 shadow-md z-50 ${isScrolled ? "bg-gray-400 shadow-md" : "bg-[#FFFFFF33]"}`}>
//       <h1 className="cursor-pointer font-dancing-script text-3xl font-bold" onClick={() => router.push("/")}>Younis Issa</h1>
//       <ul className="hidden md:flex space-x-12">
//         {NavLinks.map((link) => {
//             const isActive =
//                 pathName === link.href ||
//                 (pathName.startsWith(link.href) && link.href !== "/");
//           return (
//             <li key={link.name} className={isActive ? "text-white font-bold underline underline-offset-4" : "text-[#828282]"}>
//               <Link href={link.href} className="hover:text-white text-lg font-semibold"> 
//                 {link.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>

// <FaBarsStaggered
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white text-3xl cursor-pointer md:hidden"
//         />

//         {isOpen && (
//           <div className="md:hidden absolute top-0 right-0 w-75 h-screen bg-gray-400 flex flex-col ">
//             <div className="flex justify-between items-center">
//               <h1 className="font-dancing-script text-3xl font-bold ml-[5vw] mt-[5vh]">
//                 Younis Issa
//               </h1>

//               <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-white text-5xl cursor-pointer mt-[5vh] mr-[5vw] h-fit"
//               >
//                 x
//               </div>
//             </div>

//             <ul className=" flex flex-col justify-center items-center gap-5 p-5 text-white font-semibold text-xl mt-auto">
//               {NavLinks.map((link) => {
//                 const isActive =
//                   pathName === link.href ||
//                   (pathName.startsWith(link.href) && link.href !== "/");
//                 return (
//                   <li
//                     onClick={() => setIsOpen(!isOpen)}
//                     key={link.name}
//                     className={
//                       isActive ? "w-fit border-b-2 border-[#FA8B02]" : "w-fit"
//                     }
//                   >
//                     <Link href={link.href}>{link.name}</Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}

//     </nav>
<>
      {/* Dismissible Top Banner */}
      {/* {showBanner && (
        <div className="fixed top-0 left-0 w-full px-4 lg:px-8 bg-Grey-10 border-b border-Grey-15 z-[1100] h-[49px] xl:h-[63px] flex items-center overflow-hidden">
          <div className="relative w-full h-full text-center flex">
            <div className="absolute inset-0 w-[300%] -left-[100%] md:w-[110%] h-[1150%] -top-[410%] md:-left-[5%] object-cover">
              <WavyBackdrop paths={BANNER_PATH} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full xl:text-lg md:text-sm xs:text-[12px] pr-6.5 text-[10px]">
              <span className=" text-White xl:pr-2.5 pr-1.5">
                ✨Discover Your Dream Property with Estatein
              </span>
              <span className="underline">Learn More</span>
            </div>
            <button
              aria-label="Close banner"
              onClick={() => setShowBanner(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-White hover:text-Purple-75 rounded-full w-6.5 xl:w-8 h-6.5 xl:h-8 flex items-center justify-center bg-White/10"
            >
              <X className="w-[9px] h-[9px] xl:w-3 xl:h-3 text-inherit" />
            </button>
          </div>
        </div>
      )} */}

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed md:hidden top-0 left-0 w-screen h-screen bg-Grey-10 opacity-60 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <nav
        className={`fixed left-0 top-0 w-full xl:h-[99px] md:h-[77px] z-[1000] flex justify-between items-center px-4 md:px-[5.5555%] xl:px-[8.4375%] xl:py-0 md:py-0 py-5 bg-Grey-10 shadow transition-all duration-300 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]`}
      >
        {/* Logo */}
        {/* <Logo /> */} <h1 className="cursor-pointer font-comfortaa text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium" onClick={() => router.push("/")}>Younis Issa</h1>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex gap-6 xl:text-lg items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
               pathName === link.path ||
               (pathName.startsWith(link.path) && link.path !== "/");
            return (
            <Link
              key={link.path}
              href={link.path}
              className={navLinkStyles({isActive})}
              onClick={scrollTop}
            >
              {link.name}
            </Link>
          )})}
        </div>

        <div className="hidden md:flex">
          <ThemeButton />
        </div>



        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden flex justify-center items-center w-7 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
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

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-1/2 bg-Grey-10 z-50 transform transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] md:hidden  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-[68.58px] flex flex-col items-start">
          {navLinks.map(({ name, path }) =>{
            const isActive =
               pathName === path ||
               (pathName.startsWith(path) && path !== "/");
            return (
            <Link
              key={path}
              href={path}
              onClick={toggleMenu}
              className={
                `w-full p-5 text-White ${
                  isActive ? "border-l-2 border-Green-75/80 font-semibold" : ""
                }`
              }
            >
              {name}
            </Link>
          )})}
          <div className="p-5 w-full">{isMenuOpen && <ThemeButton />}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;




//         {/* Contact Link (Desktop) */}
//        <div className="hidden md:flex">
//           {/* {!isMenuOpen && <LightDarkBtn />} */}
//           <Link
//             href="/contact"
//             className={({ isActive }: { isActive: boolean }) =>
//               `${
//                 isActive ? "text-white bg-Purple-60" : "xl:text-lg text-White"
//               } xl:py-4 xl:px-6 md:py-3.5 md:px-5 rounded-lg border border-Grey-15 hover:bg-gradient-to-br hover:from-40%
//               hover:from-Purple-75 hover:via-50% hover:via-Purple-90 hover:to-70% hover:to-Purple-75
//               dark:hover:from-Purple-65/65 dark:hover:via-Purple-75 dark:hover:to-Purple-65/65 
//                 bg-[length:200%_200%] bg-[position:0%_0%] transition-[background-position] duration-500 ease-in-out hover:bg-[position:100%_100%]`
//             }
//             onClick={scrollTop}
//           >
//             Contact Us
//           </Link>
//         </div>
// s
