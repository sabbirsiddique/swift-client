import { FiBell } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar rounded-md fixed z-10 bg-opacity-40 backdrop-blur-sm bg-[#8688F4] text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-600 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
               <Link to="/notification"><FiBell></FiBell></Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost italic normal-case text-2xl">SwiftSend</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">
            <li className="hover:bg-[#EEFF25] hover:text-black font-bold px-2 py-1 rounded-md">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-300" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-[#EEFF25] hover:text-black font-bold px-2 py-1 rounded-md">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-300" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="hover:bg-[#EEFF25] hover:text-black font-bold px-2 py-1 rounded-md">
              <NavLink
                to="/notification"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-300" : ""
                }
              >
                <FiBell className="w-5 h-5"></FiBell>
              </NavLink>

              
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
