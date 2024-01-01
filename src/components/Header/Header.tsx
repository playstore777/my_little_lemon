import { useRef } from "react";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import logo from "../../assets/images/Little lemon logo.png.jpg";

const Header = () => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const classNames = {
    routerLinks: "",
  };

  const menuHandler = () => {
    if (menuRef.current?.classList) {
      menuRef.current?.classList.toggle("hidden");
    }
  };

  return (
    <div className="flex justify-between p-3 items-center">
      <nav>
        {/* Hamburger menu for small screens */}
        <div className="block md:hidden">
          <button
            id="toggleBtn"
            className="text-gray-600 focus:outline-none"
            onClick={menuHandler}
          >
            {" "}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu for small screens */}
        <ul
          className="hidden absolute left-0 right-0 bg-white border border-gray-300 p-2 md:border-none md:static md:flex gap-3"
          id="navMenu"
          ref={menuRef}
        >
          <li>
            <Link to="/" className={classNames.routerLinks}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/reserve-table" className={classNames.routerLinks}>
              Reserve-a-Table
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={classNames.routerLinks}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div id="logo" className="w-28 md:w-36">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="actions">
        <div className="cart">
          <LocalMallOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
