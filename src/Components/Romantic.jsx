import honeymoon_1 from "../assets/images/honeymoon_1.png";
import honeymoon_2 from "../assets/images/honeymoon_2.png";
const Romantic = () => {
  return (
    <div className="px-1 xl:px-0 flex flex-col md:flex-row justify-between items-center  gap-5 md:gap-10 max-w-[1024px] mx-auto my-5 md:my-20">
      <div className="relative w-full md:max-w-[370px] lg:max-w-[470px]">
        <div className="rounded-tl-full rounded-tr-full">
          <img
            className="rounded-tl-full rounded-tr-full"
            src={honeymoon_1}
            alt=""
          />
        </div>
        <img
          className="absolute top-0 left-0 h-28 w-28 lg:h-36 lg:w-36"
          src={honeymoon_2}
          alt=""
        />
      </div>
      {/* section title  */}
      <div className=" w-full flex-1 space-y-5">
        <h3 className="text-[#DF6951] text-lg">Honeymoon Specials</h3>
        <h2 className="text-3xl md:text-4xl text-[#181E4B] font-bold">
          Our Romantic Tropical Destinations
        </h2>
        <p>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="btn btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white">
          <span className="px-3">View Packages</span>
        </button>
      </div>
    </div>
  );
};

export default Romantic;
