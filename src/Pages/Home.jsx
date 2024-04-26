import Banner from "../Components/Banner";
import Countries from "../Components/Countries";
import Review from "../Components/Review";
import Romantic from "../Components/Romantic";
import TouristSpots from "../Components/TouristSpots";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TouristSpots></TouristSpots>
      <Romantic></Romantic>
      <Countries></Countries>
      <Review></Review>
    </div>
  );
};

export default Home;
