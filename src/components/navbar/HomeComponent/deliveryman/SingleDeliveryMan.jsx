import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

/* eslint-disable react/prop-types */
const SingleDeliveryMan = ({ singleman }) => {
  return (
    <div>
      <div className="card w-[425px] bg-[#8688F4] bg-opacity-40 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={singleman.image}
            className="rounded-xl object-cover transition-transform transform duration-1000 hover:scale-110"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{singleman.name}</h2>
          <p className="flex items-center">
            <IoCheckmarkDoneCircle className="text-green-500 w-5 h-5 mr-1"></IoCheckmarkDoneCircle>
            Parcel Delivered: {singleman.parcelsDelivered}
            
          </p>
          <p>
            Rating: {singleman.averageRating}
            <Rating
              style={{ maxWidth: 180 }}
              value={singleman.averageRating}
              readOnly
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleDeliveryMan;
