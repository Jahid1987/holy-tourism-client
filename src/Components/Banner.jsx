import bannerImg from "../assets/images/banner.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <div
      className=" max-w-[1728px] mx-auto"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url(${bannerImg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="px-3 md:px-5 lg:px-10 max-w-[1320px] mx-auto pt-20 lg:pt-40 pb-20 w-full md:w-3/4 lg:w-2/3">
        <h1 className=" text-3xl lg:text-4xl font-bold text-white">
          No matter where you’re going to,
          <br />
          <Fade delay={1e3} cascade damping={1e-1}>
            we’ll take you there
          </Fade>
        </h1>
        <div
          style={{
            borderRadius: "20px",
            background: "rgba(243, 243, 243, 0.60)",
            backdropFilter: "blur(17.760618209838867px)",
          }}
          className=" text-xs md:text-base text-white flex justify-start items-center mt-5 gap-2 md:gap-5 px-3 md:px-8 py-2 md:py-4 w-fit"
        >
          <p>Where to?</p>

          <p className="border-l-2 border-[#DF6951] pl-2">Travel Type</p>
          <p className="border-l-2 border-[#DF6951] pl-2">
            Duration{" "}
            <MdKeyboardArrowDown className="inline text-lg lg:text-3xl" />
          </p>
          <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
            <span className="px-3">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
