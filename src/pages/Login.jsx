

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { googleSignIn, logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn()
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        Swal.fire("Good job!", "You successfully logged in", "success");

        navigate(location?.state ? location.state : "/");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        Swal.fire("Good job!", "You successfully logged in", "success");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          type: "error",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>SwiftSend |Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/3RnPXsC/pexels-pixabay-531880.jpg')]">
        <div className="hero-content w-[500px] flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleLogin} className="card-body backdrop-blur-lg">
              <div className="form-control">
                <h1 className="text-3xl font-bold text-center mb-3">
                  Please Login
                </h1>
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
                Do not have an account?
                <Link
                  to="/register"
                  className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                >
                  Register
                </Link>
              </p>
              <div className="form-control mt-6 gap-5">
                <button className="btn btn-primary bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-primary bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400"
                >
                  {/*  */}
                  <span>
                    <img
                      src="https://i.ibb.co/4Jyhggz/google.png"
                      className="w-6 h-6 mr-4"
                    />
                  </span>
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
