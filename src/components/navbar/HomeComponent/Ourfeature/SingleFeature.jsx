/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const SingleFeature = ({ feature }) => {
  return (
    <div>
      <div className="card card-compact w-[425px] shadow-xl">
        <figure className="relative overflow-hidden bg-[#8688F4] bg-opacity-40">
          <img
            src={feature.icon}
            className="object-cover transition-transform transform duration-1000 hover:scale-110 mt-3 mb-3 bg-gradient-to-r from-indigo-500 rounded-3xl"
          />
        </figure>
        <div className="card-body bg-gray-200">
          <p className=" text-center bg-cover p-2 text-xl font-bold rounded-md">
            {feature.title}
            <hr className="mt-2 mb-2 w-10 mx-auto border-b-2 border-[#FDC300]"/>

          </p>
          <p>{feature.description}</p>
          <div className="card-actions justify-center">
            {/* <Link to={`/fooditems/${_id}`}>
              <button className="btn btn-primary">DETAILS</button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
