import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Profile from "../src/components/Profile";
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom/dist';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';




const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AapRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement:<Error/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path:"profile",
        element: <Profile/>
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },

    ],
  },

]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={AapRouter}   />
);


reportWebVitals();
