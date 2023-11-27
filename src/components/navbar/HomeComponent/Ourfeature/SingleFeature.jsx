/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const SingleFeature = ({ feature }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="relative overflow-hidden">
          <img
            src={feature.icon}
            className="object-cover transition-transform transform duration-1000 hover:scale-110"
          />
        </figure>
        <div className="card-body">
          <p className="bg-gray-100 text-center bg-cover p-4 text-xl font-bold rounded-md">
            {feature.title}
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
