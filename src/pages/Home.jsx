import Banner from "../components/navbar/HomeComponent/Banner";
import Features from "../components/navbar/HomeComponent/Ourfeature/Features";
import Stat from "../components/navbar/HomeComponent/stat/Stat";

const Home = () => {
  return (
    <div>
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <div className="mb-10">
        <Features></Features>
      </div>
      <div className="mb-10">
        <Stat></Stat>
      </div>
    </div>
  );
};

export default Home;
