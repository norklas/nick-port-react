import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-t border-celeste text-celeste py-6">
      <div className="flex flex-row justify-center gap-x-3">
        <a
          href="https://www.linkedin.com/in/nick-melanson/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-green-spring transform hover:scale-110 transition duration-2000 ease-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/norklas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-green-spring transform hover:scale-110 transition duration-2000 ease-out"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:nickm890@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-green-spring transform hover:scale-110 transition duration-2000 ease-out"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.dropbox.com/s/71dbg99o9hue6x2/Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-green-spring transform hover:scale-110 transition duration-2000 ease-out"
        >
          <IoDocumentTextSharp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
