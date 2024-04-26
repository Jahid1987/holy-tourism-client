import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import demoImg from "../assets/images/demo_spot.png";
import flagImg from "../assets/images/demo_flag.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ spot }) => {
  console.log(spot);
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
            <CiCalendar className="inline" /> {spot?.travel_time}
          </span>
          <span className="flex items-center gap-2">
            <CiLocationOn className="inline" /> {spot?.country_name}
          </span>
        </p>
        <div className="flex justify-between">
          <h2 className="card-title"> {spot?.tourist_spot_name} </h2>
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
          Best in: <span className="text-gray-400">{spot?.seasonality}</span>
        </p>
        <p className="text-[#DF6951] text-xl md:text-2xl">
          {spot?.average_cost}
          <FaBangladeshiTakaSign className="inline text-lg" />
          <span className="text-sm">/person</span>
        </p>
        <p>{spot?.short_description}</p>

        <div className="card-actions">
          <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
            <Link to={`/spot/${spot._id}`} className="px-2">
              View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  spot: PropTypes.object,
};
export default Card;
