import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between 
        border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8"
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      {/* BUTTON to CreatePost page */}
      <Link
        to="/create-post"
        className="rounded-md bg-[#6469ff] px-4
           py-2 font-inter font-medium text-white"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
