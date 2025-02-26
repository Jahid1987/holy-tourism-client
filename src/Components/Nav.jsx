import { Link, NavLink } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import defaultUserImage from "../assets/images/user.png";
import { toast } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
const Nav = () => {
  const { user, signOutUser } = useAuth();

  // theme change functionality
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  function handleToggle(e) {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/spots">All Tourists Spost</NavLink>
      </li>
      <li>
        <NavLink to="/create">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/list">My List</NavLink>
      </li>
    </>
  );
  // user loggin out
  async function handleSignOut() {
    try {
      await signOutUser();
      toast.success("Successfully Log out");
    } catch (error) {
      toast.error("Something wrong.");
    }
  }

  return (
    <div className="navbar  max-w-[1320px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link className="font-bold text-base md:text-xl" to="/">
          Holy Tourism
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2 text-sm md:text-base">
        <label className="swap swap-rotate">
          <input
            checked={theme === "light" ? false : true}
            onChange={handleToggle}
            type="checkbox"
          />
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="border-b-orange-600 border-b-2 font-medium md:font-bold pr-1 md:pr-3"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link
              to={"/register"}
              className="border-b-orange-600 border-b text-sm md:text-base md:font-medium pr-0 md:pr-3"
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="border-b-orange-600 border-b text-sm md:text-base md:font-medium pr-0 md:pr-3"
            >
              Login
            </Link>
          </>
        )}
        <a
          data-tooltip-id="user-tooltip"
          data-tooltip-content={user?.displayName}
          data-tooltip-place="left"
        >
          <div className="h-8 md:h-12 w-8 md:w-12 rounded-full">
            <img
              className="rounded-full w-full h-full object-cover"
              alt="Tailwind CSS Navbar component"
              src={`${user?.photoURL || defaultUserImage}`}
            />
          </div>
        </a>
        <Tooltip id="user-tooltip" />
      </div>
    </div>
  );
};

export default Nav;
