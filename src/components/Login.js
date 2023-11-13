/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { CheckValidData } from "../utils/CheckValidData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/userslice";
import { provider } from "../utils/firebase";
import googleImg from "../components/Images/google-logo-9824.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//install ==>> npm install react-toastify for popups




const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setSignInForm] = useState(true);
  const [value, setValue] = useState(); // is for google authentication
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);




  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const HandleButtonClick = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          dispatch(addUser(email.current.value, password.current.value));

          // Show success toast
          toast.success("Signup successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // eslint-disable-next-line no-lone-blocks
         {
          // const user = userCredential.user; 
        }
          dispatch(addUser(email.current.value, password.current.value));
          navigate("/");

          // Show success toast
          toast.success("Login successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handlerGooglesignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      const userEmail = data.user.email;
      dispatch(addUser(userEmail));
      navigate("/");

      // Show success toast
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-96">
        <form onSubmit={(e) => e.preventDefault()} className="text-center">
          <h1 className="text-2xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <p className="text-red-500 mb-2 text-sm">{errorMessage}</p>
          <button
            className="w-full p-2 bg-orange-500 text-white border-none rounded cursor-pointer hover:bg-orange-700 focus:outline-none focus:ring focus:border-blue-300 mb-4"
            onClick={HandleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center justify-center text-center bg-blue-500 rounded p-2 cursor-pointer transition duration-300 w-full md:w-full md:max-w-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-2 bg-white shadow-md">
              <img src={googleImg} alt="google" className="h-full w-full object-cover" />
            </div>
            <button onClick={handlerGooglesignIn} className="text-white">
              Sign in with Google
            </button>
          </div>
          <p className="text-sm text-gray-900 cursor-pointer underline mt-3" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Food Villa? Sign Up Now" : "Already have an account? Sign In"}
          </p>
          <p className="text-sm text-gray-600">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>

        {/* Toast Container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Login;
