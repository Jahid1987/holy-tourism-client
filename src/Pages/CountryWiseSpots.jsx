import { useEffect, useState } from "react";
import Card from "../Components/Card";
import footerImg from "../assets/images/footer_bg.png";
import { useParams } from "react-router-dom";
const CountryWiseSpots = () => {
  const [spots, setSpots] = useState([]);
  const [status, setStatus] = useState(null);
  const { country } = useParams();

  useEffect(() => {
    fetch(`https://holy-tourism-server.vercel.app/countrywisespots/${country}`)
      .then((res) => {
        setStatus(res.status);
        return res.json();
      })
      .then((data) => {
        setSpots(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(status);
  return (
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
          <h3 className="text-[#DF6951] text-base lg:text-lg">ALL SPOTS</h3>
          <h2 className="text-2xl md:text-4xl   font-bold">
            Heavenly Spots of {country}
          </h2>
        </div>
      </div>
      {spots.length > 0 ? (
        <div className="grid gap-3 px-1 xl:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <Card key={spot._id} spot={spot}></Card>
          ))}
        </div>
      ) : (
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
          {status === 200 && spots.length === 0 ? (
            <p>No data Found</p>
          ) : (
            <span className="loading loading-spinner loading-lg text-[#DF6951]"></span>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryWiseSpots;
