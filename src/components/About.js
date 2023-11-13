// About.js

import React from "react";
import FeatureList from "./FeatureList";




const About = () => {
  const features = [
    "Seamless Integration with Swiggy's public API 🤝",
    "Elegant Shimmer UI for an engaging experience ✨",
    "Dynamic Landing Page with a captivating Carousel 🎡",
    "Robust Search and Filtering options 🍽",
    "Detailed Restaurant Menu Pages with categorized listings 📋",
    "Convenient Cart Management for a smooth shopping experience 🛒",
    "Tailwind CSS: Stylish and interactive user interface.",
  ];

  const codeHighlights = [
    "Parcel for efficient package management 📦",
    "JSX for optimized rendering 🖌",
    "Custom Hooks for enhanced functionality ⚙",
    "React Router for smooth navigation 🚗",
    "State Management with React useContext and Redux Toolkit 🧩",
    "Efficient Cart Management 🛍",
    "Live APIs for real-time data 🔄",
    "Higher-Order Components (HOC) for code reusability ♻",
    "Controlled and Uncontrolled Components for user interaction 🎮",
    "Modern JavaScript features like optional chaining 🚀",
    "Lazy Loading and Suspense for improved performance ⚡",
  ];

  return (
    <div className="mt-10 mb-10 sm:mt-16 md:mt-24 text-center h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Key Features and Functionalities 🚀
        </h1>
        <h2 className="text-xl font-semibold mb-2">🌐 Key Features:</h2>
        <FeatureList features={features} />
        <h2 className="text-xl font-semibold mb-2">🛠️ Code Highlights:</h2>
        <FeatureList features={codeHighlights} />
      </div>
    </div>
  );
};

export default About;
