import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom/dist";
export default function Header() {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
          <Link to="/">
            {" "}
            <h1 className="font-bold text-2xl cursor-pointer flex items-center gap-1 ">
              Mayur Gavhane
            </h1>{" "}
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

          <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Sign In
          </button>
        </ul>
      </div>
    </div>
  );
}
