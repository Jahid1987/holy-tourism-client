import { useLoaderData } from "react-router-dom";

const Spot = () => {
  const spot = useLoaderData();
  return (
    <div>
      <h3>{spot.tourist_spot_name}</h3>
    </div>
  );
};

export default Spot;
