import bdFlag from "../assets/images/bangla_flag.png";
const CountryCard = () => {
  return (
    <div className="card w-full shadow-xl image-full">
      <figure>
        <img src={bdFlag} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bangladesh</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          excepturi.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-sm md:btn-md rounded-full border-[#DF6951]  font-light text-white">
            <span className="px-2">See all</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
