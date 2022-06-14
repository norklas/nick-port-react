import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 py-6">
      <div className="flex flex-row justify-center gap-x-3">
        <a
          href="https://www.linkedin/in/nick-melanson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/norklas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:nickm890@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.dropbox.com/s/71dbg99o9hue6x2/Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <IoDocumentTextSharp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
