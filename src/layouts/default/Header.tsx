import { useTheme } from "@/hooks/theme";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconSun,
  IconMoon,
  IconBurger,
  IconArrowsCross,
} from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 md:relative w-full h-20 flex items-center dark:bg-secondary  bg-white dark:md:bg-transparent md:bg-transparent">
      <meta
        name="theme-color"
        content={theme === "dark" ? "#060916" : "#ffffff"}
      />
      <nav className="relative container-md w-full h-full flex items-center justify-between ">
        <div
          className="flex flex-col cursor-pointer hover:font-bold duration-200"
          onClick={() => goToSection("/")}
        >
          <p>Jason</p>
          <p className="text-xs">Software Engineer</p>
        </div>
        <button onClick={toggleShowMenu} className="md:hidden outline-none">
          {showMenu && <IconArrowsCross />}
          {!showMenu && <IconBurger />}
        </button>
        <div
          className={`p-6 md:p-0 flex flex-col md:flex-row gap-6 fixed md:static dark:bg-secondary md:bg-transparent dark:md:bg-transparent  bg-white top-16  ${
            showMenu ? "left-0" : "left-full w-0"
          } h-screen w-full md:w-auto md:h-auto duration-200`}
        >
          <div className="flex flex-col md:flex-row md:justify-center w-full gap-6 h-[60%] md:h-auto">
            <a
              onClick={() => goToSection(`/`)}
              className={`${navLinkClass} ${
                pathname.startsWith("/") && "font-bold"
              }`}
            >
              Projects
            </a>
            <a
              onClick={() => goToSection(`/about`)}
              className={`${navLinkClass} ${
                pathname.startsWith("/about") && "font-bold"
              }`}
            >
              About
            </a>
            <a
              onClick={() => goToSection(`/experience`)}
              className={`${navLinkClass} ${
                pathname.startsWith("/experience") && "font-bold"
              }`}
            >
              Experience
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/jsonfm/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 duration-200"
            >
              <IconBrandLinkedin />
            </a>
            <a
              href="https://github.com/jsonfm"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 duration-200"
            >
              <IconBrandGithub />
            </a>
          </div>
          <div className="flex justify-center md:justify-start mt-6 md:mt-0">
            <button
              className="cursor-pointer hover:scale-110 duration-200 outline-none"
              onClick={toggleTheme}
            >
              {theme === "dark" && <IconSun />}
              {theme !== "dark" && <IconMoon />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
