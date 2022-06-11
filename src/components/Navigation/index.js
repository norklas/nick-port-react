import React from "react";

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <ul>
      <li>
        <a href="#home" onClick={() => handlePageChange("Home")}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={() => handlePageChange("About")}>
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={() => handlePageChange("Projects")}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
