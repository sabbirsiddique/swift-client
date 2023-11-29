import { Helmet } from "react-helmet-async";
import Banner from "../components/navbar/HomeComponent/Banner";
import Features from "../components/navbar/HomeComponent/Ourfeature/Features";
import TopDeliveryMan from "../components/navbar/HomeComponent/deliveryman/TopDeliveryMan";
import Stat from "../components/navbar/HomeComponent/stat/Stat";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SwiftSend | Home</title>
      </Helmet>
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <div className="mb-10">
        <Features></Features>
      </div>
      <div className="mb-10">
        <Stat></Stat>
      </div>
      <div className="mb-10">
        <TopDeliveryMan></TopDeliveryMan>
      </div>
    </div>
  );
};

export default Home;
