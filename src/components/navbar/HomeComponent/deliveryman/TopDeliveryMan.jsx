import axios from "axios";
import { useEffect, useState } from "react";
import SingleDeliveryMan from "./SingleDeliveryMan";

const TopDeliveryMan = () => {
  const [deliveryMan, setDeliveryMan] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/topdeliveryman")
      .then((res) => {
        setDeliveryMan(res.data);
      })
      .catch((error) => {
        console.log("error fetching", error);
      });
  }, []);

  return(
    <div>
        <div>
        <h1 className="italic text-3xl uppercase text-center relative">The Top <strong>Delivery Man</strong></h1>
        <hr className="mt-2 mb-10 w-10 mx-auto border-b-2 border-[#FDC300]"/>
         
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {deliveryMan.map((singleman) => (
            <SingleDeliveryMan key={singleman._id} singleman={singleman}></SingleDeliveryMan>
        ))}
      </div>
    </div>
  )
};

export default TopDeliveryMan;
