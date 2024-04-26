import { Link, NavLink } from "react-router-dom";
import footerImg from "../assets/images/footer_bg.png";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className=" max-w-[1440px] mx-auto h-72 bg-white"
      style={{
        backgroundColor: "white",
        background: `url(${footerImg}) -0.019px -41.058px / 154.946% 129.339% no-repeat`,
      }}
    >
      <div className="px-1 xl:px-0 grid gap-4 text-center md:text-left grid-cols-1 md:grid-cols-3 max-w-[1020px] mx-auto  py-20">
        <div className="space-y-4">
          <Link className="btn btn-ghost text-xl" to="/">
            Holy Tourism
          </Link>
          <p className="text-base font-medium text-gray-400">
            Travel helps companies manage payments easily.
          </p>
          <div className=" flex justify-center md:justify-start gap-4 text-xl text-[#DF6951]">
            <FaWhatsapp />
            <CiFacebook />
            <CiLinkedin />
            <CiTwitter />
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">Company</p>
          <ul className="space-y-3">
            <li className="mt-3">
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
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl">Join Our Newsletter</p>
          <form className="space-y-3">
            <label className="mt-3 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
              <span className="px-3">Subscribe</span>
            </button>
            <p className=" text-base font-medium text-gray-400">
              * Will send you weekly updates for your better tour packages.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
