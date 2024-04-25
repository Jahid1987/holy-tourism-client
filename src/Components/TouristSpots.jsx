import Card from "./Card";

const TouristSpots = () => {
  return (
    <div className="max-w-[1024px] mx-auto">
      {/* section title  */}
      <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 my:mt-10">
        <h3 className="text-[#DF6951] text-lg">Tour Spots</h3>
        <h2 className="text-2xl md:text-4xl text-[#181E4B] font-bold">
          Our Trending Tour Packages
        </h2>
      </div>
      <div className="grid gap-3 px-1 xl:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default TouristSpots;
