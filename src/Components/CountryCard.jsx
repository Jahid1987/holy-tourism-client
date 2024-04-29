import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  return (
    <div className="card w-full shadow-xl image-full">
      <figure>
        <img src={country?.image} alt="image of flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country?.name}</h2>
        <p>{country?.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/countrywise/${country.name}`}>
            <button className="btn btn-outline btn-sm md:btn-md rounded-full border-[#DF6951]  font-light text-white">
              <span className="px-2">See All Spots</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
CountryCard.propTypes = {
  country: PropTypes.object,
};

export default CountryCard;
