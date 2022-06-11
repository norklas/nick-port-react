const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <ul className="flex flex-row gap-x-4 justify-center text-lg">
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
    </nav>
  );
};

export default Navigation;
