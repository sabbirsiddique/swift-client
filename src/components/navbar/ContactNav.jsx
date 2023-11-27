import { FiPhoneCall } from "react-icons/fi";

const ContactNav = () => {
  return (
    <div className="">
      <div className="md:flex p-2 md:justify-between bg-transparent items-center backdrop-blur-sm md:max-w-screen-xl">
        <img
          className="text-blue-600"
          src="https://i.ibb.co/XC2S0Jv/logo.png"
          alt=""
        />
        <div className="flex items-center ">
          <div className="flex border-r-4 border-blue-600 mr-3">
            <FiPhoneCall className="w-12 h-12 text-blue-600 mr-3"></FiPhoneCall>
            <div className="flex flex-col mr-3 text-blue-600 text-xl">
              <p>WANT A TRANSPORT?</p>
              <p>CALL US NOW</p>
            </div>
          </div>
          <div className="text-blue-600 text-xl font-bold">
            <p>(+880) 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
