import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex  flex-shrink-0 items-center">
        <h1 className="m-2 text-4xl">oA</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl hover:border-y-violet-950">
        <FaLinkedin onclick="location.href='https://linkedin.com/'" />
        <FaGithub onclick="location.href='https://github.com/'" />
        <FaTwitterSquare onclick="location.href=' https://twitter.com/home'" />
      </div>
    </nav>
  );
};

export default Navbar;
