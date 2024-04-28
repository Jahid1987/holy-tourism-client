import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom/dist";

const TouristSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("https://holy-tourism-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto">
      {/* section title  */}
      <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
        <h3 className="text-[#DF6951] text-lg">ALL SPOTS {spots.length}</h3>
        <h2 className="text-3xl md:text-4xl text-[#181E4B] font-bold">
          Our Trending Tour Packages
        </h2>
      </div>
      {/* showing all 6 items  */}
      {spots.length > 0 ? (
        <div className="grid gap-3 px-1 xl:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {spots.slice(0, 6).map((spot) => (
            <Card key={spot._id} spot={spot}></Card>
          ))}
        </div>
      ) : (
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
          <span className="loading loading-spinner loading-lg text-[#DF6951]"></span>
        </div>
      )}
      {/* showing show all button  */}
      {spots.length > 6 && (
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
          <Link to="/spots">
            <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
              <span className="px-3">Show All</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TouristSpots;
