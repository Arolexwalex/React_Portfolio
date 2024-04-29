import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex  flex-shrink-0 items-center">
        <h1 className="m-2 text-4xl">oA</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl hover:border-y-violet-950 cursor-pointer">
        <a href="https://www.linkedin.com/in/olawale-arowojolu-69036120a/">
        <FaLinkedin  /></a>
        <a href="https://github.com/Arolexwalex">
        <FaGithub /></a>
        <a href="https://twitter.com/OlawaleAro14630">
        <FaTwitterSquare /></a>
      </div>
    </nav>
  );
};

export default Navbar;
