import guideImg from "../assets/images/tour-guide.png";
import travelImg from "../assets/images/travelling.png";
import handsImg from "../assets/images/hands.png";
import medicalImg from "../assets/images/medical-team.png";
const BestOffer = () => {
  return (
    <>
      {/* section title  */}
      <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
        <h3 className="text-[#DF6951] text-base lg:text-lg">DO NOT MISS</h3>
        <h2 className="text-2xl md:text-4xl   font-bold">
          We Offer Best Services
        </h2>
      </div>
      {/* service section  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <div className="space-y-2 text-center p-10">
          <div className="flex h-20 justify-center w-full rounded-full">
            <img className="rounded-full object-cover " src={guideImg} alt="" />
          </div>
          <p className="text-sm font-bold">Guided Tours</p>
          <p className="text-gray-400 text-sm">
            Explore confidently with knowledgeable guides by your side.
          </p>
        </div>
        <div className="space-y-2 text-center p-10 bg-white shadow-xl rounded-xl">
          <div className="flex h-20 justify-center w-full rounded-full">
            <img
              className="rounded-full object-cover "
              src={travelImg}
              alt=""
            />
          </div>
          <p className="text-sm font-bold">Best Flights Options</p>
          <p className="text-gray-400 text-sm">
            Discover unbeatable deals for seamless travel.
          </p>
        </div>
        <div className="space-y-2 text-center p-10">
          <div className="flex h-20 justify-center w-full rounded-full">
            <img className="rounded-full object-cover " src={handsImg} alt="" />
          </div>
          <p className="text-sm font-bold">Religious Tours</p>
          <p className="text-gray-400 text-sm">
            Embark on spiritual journeys to sacred destinations.
          </p>
        </div>
        <div className="space-y-2 text-center p-10">
          <div className="flex h-20 justify-center w-full rounded-full">
            <img
              className="rounded-full object-cover "
              src={medicalImg}
              alt=""
            />
          </div>
          <p className="text-sm font-bold">Medical Tours</p>
          <p className="text-gray-400 text-sm">
            Access world-class healthcare while traveling with peace of mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default BestOffer;
