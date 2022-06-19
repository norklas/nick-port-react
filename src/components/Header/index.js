import React, { useState } from "react";

const Header = ({ currentPage, handlePageChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-celeste py-6 text-celeste">
      <a href="#about" className="text-lg font-bold">
        <p>Nick Melanson | Frontend Developer</p>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-celeste"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-celeste"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-celeste"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-celeste"
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
              <li className="border-b border-celeste my-8 uppercase">
                <a
                  href="#about"
                  onClick={() =>
                    handlePageChange("About") + setIsNavOpen(false)
                  }
                >
                  About
                </a>
              </li>
              <li className="border-b border-celeste my-8 uppercase">
                <a
                  href="#portfolio"
                  onClick={() =>
                    handlePageChange("Portfolio") + setIsNavOpen(false)
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="border-b border-celeste my-8 uppercase">
                <a
                  href="#skills"
                  onClick={() =>
                    handlePageChange("Skills") + setIsNavOpen(false)
                  }
                >
                  Skills
                </a>
              </li>
              <li className="border-b border-celeste my-8 uppercase">
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
            <a
              className="cursor-pointer rounded-md px-2 py-[0.10rem] text-md"
              href="#about"
              onClick={() => handlePageChange("About")}
            >
              <span className="link-underline link-underline-colored">
                About
              </span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer rounded-md px-2 py-[0.10rem] text-md"
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              <span className="link-underline link-underline-colored">
                Portfolio
              </span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer rounded-md px-2 py-[0.10rem] text-md"
              href="#skills"
              onClick={() => handlePageChange("Skills")}
            >
              <span className="link-underline link-underline-colored">
                Skills
              </span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer rounded-md px-2 py-[0.10rem] text-md"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              <span className="link-underline link-underline-colored">
                Contact
              </span>
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
        background: #5F7470;
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
