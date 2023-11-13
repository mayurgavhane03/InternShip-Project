import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../store/slices/userslice";
import AppLogo from "./Images/logo/appLogo.png";

export default function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
  const [open, setOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(!!user); // Initialize based on user data
  useEffect(() => {
    // Use an effect to watch for changes in the 'user' object
    setIsLoggedIn(!!user); // Update 'isLoggedIn' when 'user' changes
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Clear localStorage

        // Set isLoggedIn to false
        setIsLoggedIn(false);

        // Navigate to the desired page (e.g., '/')
        navigate("/");
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
          <Link to="/">
            {" "}
            <img
              src={AppLogo}
              alt="logo"
              className=" h-[50px] lg:ml-5 cursor-pointer flex items-center gap-1 "
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex z-40 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px] "
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link to="/about" onClick={() => setOpen(!open)}>
              About
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link to="/profile" onClick={() => setOpen(!open)}>
              Profile
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link to="/cart" onClick={() => setOpen(!open)}>
              Cart{" "}
              <span className="text-orange-500">
                {Object.values(cartItems).length}
              </span>
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button
                className="btn bg-orange-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                onClick={() => {
                  setIsLoggedIn(false);
                  handleSignOut();
                  setOpen(!open);
                  dispatch(removeUser());
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn bg-orange-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                onClick={() => {
                  navigate("/login");
                  setOpen(!open);
                }}
              >
                Sign In
              </button>
            )}
          </li>

          {/* Remove the extra Sign In button */}
        </ul>
      </div>
    </div>
  );
}
