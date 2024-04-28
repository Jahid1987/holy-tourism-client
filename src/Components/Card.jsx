import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LinesEllipsis from "react-lines-ellipsis";

const Card = ({ spot }) => {
  function onChange(newvalue) {
    console.log(newvalue);
  }

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="relative">
        <div className="w-full h-[200px]">
          <img
            className="object-cover w-full h-full"
            src={spot?.image}
            alt=""
          />
        </div>
        <img
          className="absolute bottom-2 right-2 border-white border-2 w-[50px] h-[50px] rounded-full"
          src={spot?.country_flag}
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
            <CiLocationOn className="inline" /> {spot?.location}
          </span>
        </p>
        <div className="flex justify-between">
          <h2 className="card-title"> {spot?.tourist_spot_name} </h2>
          <Rating
            style={{ maxWidth: 100, height: "24px" }}
            value={spot?.default_rating}
            onChange={onChange}
            transition="zoom"
          />
        </div>
        <p>
          Best in: <span className="text-gray-400">{spot?.seasonality}</span>
        </p>
        <p className="text-[#DF6951] text-xl md:text-2xl">
          {spot?.average_cost}
          <FaBangladeshiTakaSign className="inline text-lg" />
          <span className="text-sm">/person</span>
        </p>
        <LinesEllipsis
          text={spot?.short_description}
          maxLine="2"
          ellipsis=" . . ."
          trimRight
          basedOn="letters"
        />

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
