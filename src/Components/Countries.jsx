import CountryCard from "./CountryCard";

const Countries = () => {
  return (
    <div className="max-w-[1024px] mx-auto">
      {/* section title  */}
      <div className=" w-full md:w-2/3 lg:w-2/4 mx-auto text-center my-5 md:my-10">
        <h3 className="text-[#DF6951] text-lg">ALL COUNTRIES</h3>
        <h2 className="text-3xl md:text-4xl text-[#181E4B] font-bold">
          Countries With Heavenly Spots
        </h2>
      </div>
      <div className="grid gap-3 px-1 xl:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
      </div>
    </div>
  );
};

export default Countries;
