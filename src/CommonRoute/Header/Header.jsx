import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

import useAuth from "../../CustomHooks/useAuth";
import useCart from "../../Hooks/useCart";

const Header = () => {
  const { user, logOut } = useAuth();

  const [cart] = useCart();

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/contact"
        >
          Contact us
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/dashboard/user-home"
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/menu"
        >
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/order/salad"
        >
          Our Order
        </NavLink>
      </li>

      <li className="w-8">
        <Link
          className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
          to="/dashboard/cart"
        >
          <div>
            <img src={icon} alt="" />
            <p> +{cart.length}</p>
          </div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button
              onClick={() => {
                logOut();
              }}
              className={"text-[#EEFF25] py-2 px-4 rounded-lg"}
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "text-[#EEFF25] py-2 px-4 rounded-lg" : "text-white py-2 px-4 rounded-lg")}
              to="/login"
            >
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-black text-white bg-opacity-30 font-semibold max-w-[1920px] bg-base-100 fixed top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <Link to="/" className=" ">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className=" px-1 flex items-center gap-3">{navLink}</ul>
      </div>
    </div>
  );
};

export default Header;
