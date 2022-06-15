import React, { useState } from "react";

const Header = ({ currentPage, handlePageChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-6">
      <a href="/">
        <p>Nick Melanson | Frontend Developer</p>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#about"
                  onClick={() =>
                    handlePageChange("About") + setIsNavOpen(false)
                  }
                >
                  About
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#portfolio"
                  onClick={() =>
                    handlePageChange("Portfolio") + setIsNavOpen(false)
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#skills"
                  onClick={() =>
                    handlePageChange("Skills") + setIsNavOpen(false)
                  }
                >
                  Skills
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#contact"
                  onClick={() =>
                    handlePageChange("Contact") + setIsNavOpen(false)
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="#about" onClick={() => handlePageChange("About")}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handlePageChange("Skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Header;
