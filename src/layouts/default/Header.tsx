"use client";

import { useTheme } from "@/hooks/theme";
import { Icon } from "@iconify/react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);
  const { theme, toggleTheme } = useTheme();

  const router = useRouter();
  const goToSection = (href: string) => {
    setShowMenu(false);
    router.push(href);
  };
  const navLinkClass = `cursor-pointer hover:scale-105 duration-200`;

  return (
    <header
      className={`z-10 sticky top-0 left-0 md:relative w-full h-20 flex ${
        showMenu ? "bg-neutral-950/70" : "bg-neutral-950/5"
      } md:bg-transparent`}
    >
      <meta
        name="theme-color"
        content={theme === "dark" ? "#0A0A0A" : "#ffffff"}
      />
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></div>
      )}
      <nav className="relative container-md w-full h-full flex items-center justify-between ">
        <motion.div
          className="flex flex-col cursor-pointer hover:font-bold duration-200 select-none"
          onClick={() => goToSection("/")}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-semibold">Js</p>
          {/* <p className="text-xs">Software Engineer</p> */}
        </motion.div>
        <button onClick={toggleShowMenu} className="md:hidden outline-none">
          {showMenu && <Icon icon="clarity:close-line" fontSize={30} />}
          {!showMenu && (
            <Icon icon="fluent:list-rtl-20-regular" fontSize={30} />
          )}
        </button>
        <div
          className={` p-6 md:p-0 flex flex-col md:flex-row gap-6 fixed md:static top-[5rem]  ${
            showMenu
              ? "left-0 backdrop-blur-sm bg-neutral-950/70"
              : "left-full w-0"
          } h-screen w-full md:w-auto md:h-auto duration-200`}
        >
          <div className="flex flex-col md:flex-row md:justify-center items-center w-full gap-6 py-12 md:py-0 h-[60%] md:h-auto">
            <motion.a
              onClick={() => goToSection(`/`)}
              className={`${navLinkClass} ${
                pathname === "/" && "font-semibold"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              Projects
            </motion.a>
            <a
              onClick={() => goToSection(`/about`)}
              className={`${navLinkClass} ${
                pathname.startsWith("/about") && "font-semibold"
              }`}
            >
              About
            </a>
            <a
              onClick={() => goToSection(`/experience`)}
              className={`${navLinkClass} ${
                pathname.startsWith("/experience") && "font-semibold"
              }`}
            >
              Experience
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/jsonfm"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 duration-200"
            >
              <Icon icon="ri:github-line" fontSize={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jsonfm/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 duration-200"
            >
              <Icon icon="ri:linkedin-line" fontSize={20} />
            </a>
          </div>
          {/* <div className="flex justify-center md:justify-start mt-6 md:mt-0">
            <button
              className="cursor-pointer hover:scale-110 duration-200 outline-none"
              onClick={toggleTheme}
            >
              {theme === "dark" && <IconSun />}
              {theme !== "dark" && <IconMoon />}
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
