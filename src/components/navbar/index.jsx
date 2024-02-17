import { MdOutlineMenu } from "react-icons/md";
import { BUTTON_LINKS, NAV_LINKS } from "./data";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar fixed w-full top-0 left-0 z-10 navbar-transparent">
      {/* Main logo */}
      <div className="navbar-start items-center">
        <div className="dropdown">
          {/* Icon */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdOutlineMenu fontSize={25} />
          </div>
          {/* Menu Links */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="px-2 py-2 sm:py-1">
                <Link to={link.path}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-4xl lowercase font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-400">
          <Link to="/">Dodo</Link>
        </h1>
        {/* Navlinks */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="text-base">
                <Link to={link.path}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Buttons */}
      <div className="navbar-end flex gap-3">
        {BUTTON_LINKS.map((button) => (
          <Link key={button.id} className="btn btn-ghost" to={button.path}>
            {button.name}
            <FaArrowRightLong />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
