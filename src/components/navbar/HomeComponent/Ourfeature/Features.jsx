import axios from "axios";
import { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/features")
      .then((res) => {
        setFeatures(res.data);
      })
      .catch((error) => {
        console.log("error fetching", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="italic text-3xl uppercase text-center relative">Our <strong>features</strong></h1>
        <hr className="mt-2 mb-10 w-10 mx-auto border-b-2 border-[#FDC300]"/>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <SingleFeature key={feature._id} feature={feature}></SingleFeature>
        ))}
      </div>
    </div>
  );
};

export default Features;
