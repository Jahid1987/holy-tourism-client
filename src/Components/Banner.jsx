import bannerImg from "../assets/images/banner.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Banner = () => {
  return (
    <div
      className=" max-w-[1440px] mx-auto"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url(${bannerImg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="px-10 max-w-[1024px] mx-auto pt-40 pb-12 w-2/3">
        <h1 className="text-5xl font-bold text-white">
          No matter where you’re going to, we’ll take you there
        </h1>
        <div
          style={{
            borderRadius: "20px",
            background: "rgba(243, 243, 243, 0.60)",
            backdropFilter: "blur(17.760618209838867px)",
          }}
          className="text-white flex justify-start items-center mt-5 gap-5 px-8 py-4 w-fit"
        >
          <p>Where to?</p>
          <p>Travel Type</p>
          <p>
            Duration <MdKeyboardArrowDown className="inline text text-3xl" />
          </p>
          <button className="btn rounded-full border-none bg-[#DF6951] font-light text-white">
            <span className="px-3">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
