import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import demoImg from "../assets/images/demo_spot.png";
import flagImg from "../assets/images/demo_flag.png";

const Card = () => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={demoImg} alt="" />
        <img
          className="absolute bottom-0  right-0 w-[76px] h-[76px] rounded-full"
          src={flagImg}
          alt=""
        />
      </figure>
      <figure></figure>
      <div className="card-body ">
        <p className="text-gray-400 flex justify-between">
          <span className="flex items-center gap-2">
            <CiCalendar className="inline" /> 8 Days
          </span>
          <span className="flex items-center gap-2">
            <CiLocationOn className="inline" /> Bangladesh
          </span>
        </p>
        <div className="flex justify-between">
          <h2 className="card-title"> Cox’s Bazar </h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p>
          Best in: <span className="text-gray-400">Winter</span>
        </p>
        <p className="text-[#DF6951] text-xl md:text-2xl">
          1,000 <FaBangladeshiTakaSign className="inline text-lg" />
        </p>
        <p>If a dog chews shoes whose shoes does he choose?</p>

        <div className="card-actions">
          <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
            <span className="px-2">View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
