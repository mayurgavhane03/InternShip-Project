import React from "react";

export default function About() {
  return (
    <div className="mt-8 sm:mt-16 md:mt-24 text-center  h-screen ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Key Features and Functionalities 🚀
        </h1>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Swiggy APIs: Real-time Restaurant data and menu retrieval.
          </li>
          <li className="mb-2">
            React Router DOM: Smooth routing and navigation.
          </li>
          <li className="mb-2">
            Reusable Functional Components: Building efficiency into the
            application.
          </li>
          <li className="mb-2">
            Filtered Restaurant Search: Find restaurants by name, top ratings.
          </li>
          <li className="mb-2">React Carousel: Dynamic food item display.</li>
          <li className="mb-2">
            Higher Order Components: Supporting new/promoted restaurant
            categories.
          </li>
          <li className="mb-2">
            Tailwind CSS: Stylish and interactive user interface.
          </li>
          <li className="mb-2">
            Custom Hooks: Optimizing code splitting and chunking.
          </li>
        </ul>
      </div>
    </div>
  );
}
