import { Link, NavLink } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import defaultUserImage from "../assets/images/user.png";
import { toast } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const Nav = () => {
  const { user, signOutUser } = useAuth();
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

        <Link className="font-bold text-xl" to="/">
          Holy Tourism
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <button
            onClick={handleSignOut}
            className="border-b-orange-600 border-spacing-4 border-b-2 font-bold pr-3"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="border-b-orange-600 border-spacing-4 border-b-2 font-bold pr-3"
          >
            Login
          </Link>
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
