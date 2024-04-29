import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import BestOffer from "../Components/BestOffer";
const Spot = () => {
  const spot = useLoaderData();
  function onChange(newvalue) {
    console.log(newvalue);
  }
  return (
    <div className="max-w-[1320px] mx-auto">
      {/* section title  */}
      <div>
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
          <h3 className="text-[#DF6951] text-base lg:text-lg">DETAILS OF</h3>
          <h2 className="text-2xl md:text-4xl   font-bold">
            {spot?.tourist_spot_name}
          </h2>
        </div>
      </div>
      {/* product details  */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 mx-1">
        <div
          className="md:w-1/2 h-[300px] rounded-lg relative"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url(${spot?.image}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="absolute bottom-1 right-1 flex items-end">
            <div className="badge badge-info mr-2">
              <CiLocationOn className="inline text-[#DF6951] mr-2" />
              {spot.location}
            </div>
            <div className=" badge badge-ghost pr-7 -mr-7">
              In {spot.country_name}
            </div>
            <img
              className=" border-white border-2 w-[50px] h-[50px] rounded-full"
              src={spot?.country_flag}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <p>
            <span className="text-lg font-semibold">Description:</span>{" "}
            <span className="text-gray-500">{spot?.short_description}</span>
          </p>
          <p>
            <span className="text-lg font-semibold">Best Time to Visit:</span>{" "}
            <span className="text-gray-500">{spot?.seasonality}</span>
          </p>
          <p>
            <span className="text-lg font-semibold">
              Total Visitors Per Year:
            </span>{" "}
            <span className="text-gray-500">
              {spot?.total_visitors_per_year}
            </span>
          </p>
          <p>
            <span className="text-lg font-semibold">Travel Time:</span>{" "}
            <span className="text-gray-500">{spot?.travel_time}</span>
          </p>
          <div className=" flex">
            <span className="text-lg font-semibold">Average Cost:</span>{" "}
            <span className="text-gray-500 flex items-center ml-2">
              <FaBangladeshiTakaSign className="text-sm" />
              {spot?.average_cost}
            </span>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="text-lg font-semibold">Rating: </span>
            <Rating
              style={{ maxWidth: 100, height: "24px" }}
              value={spot?.default_rating}
              onChange={onChange}
              transition="zoom"
            />
          </div>
          <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
            <span className="px-3">Book Now</span>
          </button>
        </div>
      </div>
      {/* best cross sellign offers  */}
      <BestOffer></BestOffer>
    </div>
  );
};

export default Spot;
