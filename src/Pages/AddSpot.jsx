import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../CustomHooks/useAuth";
import footerImg from "../assets/images/footer_bg.png";

const AddCoffee = () => {
  const { user } = useAuth();
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    fetch("https://holy-tourism-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // adding spost to the spot collection
  function handleAddSpot(e) {
    e.preventDefault();
    const form = e.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const average_cost = parseInt(form.average_cost.value);
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const country_name = form.country_name.value;
    const short_description = form.short_description.value;
    const image = form.image.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const user_email = user?.email;
    const user_name = user?.displayName;
    const country_flag = flag;
    const default_rating = Math.floor(Math.random() * 4) + 2;

    const newSpot = {
      tourist_spot_name,
      average_cost,
      location,
      seasonality,
      country_name,
      short_description,
      image,
      travel_time,
      total_visitors_per_year,
      user_email,
      user_name,
      country_flag,
      default_rating,
    };
    console.log(newSpot);
    fetch("https://holy-tourism-server.vercel.app/spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "A Spot is Successfullly Added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Sorry!",
            text: "Something went wrong!",
          });
        }
      });
  }
  // setting country flag to show in all spots sections in the corner
  function handleCountryFlag(e) {
    const countryName = e.target.value;
    fetch(`http://localhost:5000/countries/${countryName}`)
      .then((res) => res.json())
      .then((data) => setFlag(data.image));
    console.log(flag);
  }
  return (
    <div className="pb-10">
      <div className="max-w-[1320px] mx-auto">
        {/* section title  */}
        <div
          className="py-4"
          style={{
            backgroundColor: "white",
            background: `url(${footerImg}) -0.019px -41.058px / 154.946% 129.339% no-repeat`,
          }}
        >
          <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
            <h3 className="text-[#DF6951] text-base lg:text-lg">CREATE NEW</h3>
            <h2 className="text-2xl md:text-4xl text-[#181E4B] font-bold">
              Add New Spot
            </h2>
          </div>
        </div>
        <form onSubmit={handleAddSpot} className="px-3">
          {/* form row  */}
          <div className="md:flex gap-3">
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Spot Name
                </span>
              </div>
              <input
                type="text"
                name="tourist_spot_name"
                placeholder="Enter Spot Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Average Cost
                </span>
              </div>
              <input
                type="number"
                name="average_cost"
                placeholder="Enter Average Cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form row  */}
          <div className="md:flex gap-3">
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Location
                </span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Seasonality
                </span>
              </div>
              <select
                defaultValue="Select Season"
                name="seasonality"
                className="select select-bordered w-full"
              >
                <option disabled>Select Season</option>
                <option>Summer</option>
                <option>Rainy</option>
                <option>Autumn</option>
                <option>Late-autumn</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>All Year Round</option>
              </select>
            </label>
          </div>
          {/* form row  */}
          <div className="md:flex gap-3">
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Country Name
                </span>
              </div>
              <select
                onChange={handleCountryFlag}
                defaultValue="Select Country"
                name="country_name"
                className="select select-bordered w-full"
              >
                <option disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country._id}>{country.name}</option>
                ))}
              </select>
            </label>
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Total Visitor/Year
                </span>
              </div>
              <input
                type="text"
                name="total_visitors_per_year"
                placeholder="Enter Total Visitor/Year"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form row  */}
          <div className="md:flex gap-3">
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Travel Time
                </span>
              </div>
              <input
                type="text"
                name="travel_time"
                placeholder="Enter Travel Time"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2 space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Short Description
                </span>
              </div>
              <input
                type="text"
                name="short_description"
                placeholder="Enter Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form row  */}
          <div className="md:flex gap-3">
            <label className="form-control md:w-full space-y-2">
              <div className="label">
                <span className="label-text text-lg lg:text-xl font-semibold">
                  Image
                </span>
              </div>
              <input
                type="text"
                name="image"
                placeholder="Enter Image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            role="submit"
            className="btn float-end btn-sm md:btn-md rounded-full border-none bg-[#DF6951] font-light text-white mt-5"
          >
            <span className="px-3">Add Tourist Spot</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
