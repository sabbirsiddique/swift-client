

/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Register = () => {

  const {createUser}= useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const phtUrl = form.get("url");
    const password = form.get("password");
    console.log(password)

    const validPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!validPassword.test(password)) {
      Swal.fire(
        "Error",
        "Password must be at least 6 characters long, contain one capital letter, and one special character. Plz try again.....",
        "error"
      );
      return;
    }

    createUser(email, password,name,phtUrl)
      .then((result) => {
        Swal.fire("Good job!","Registration succesfull", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
     <Helmet>
        <title>SwiftSend |Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/3RnPXsC/pexels-pixabay-531880.jpg')]">
        <div className="hero-content w-[500px] flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleRegister} className="card-body backdrop-blur-lg rounded-lg">
              <div className="form-control">
                <h1 className="text-3xl font-bold text-center mb-3">Register Here...</h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
    
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="Enter photo url"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
              <p className="mt-6 flex justify-center font-sans text-lg font-bold leading-normal text-inherit antialiased">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                >
                  Login
                </Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-green-500 to-blue-500">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
