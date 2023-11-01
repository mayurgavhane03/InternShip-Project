import React from "react";
import { useState, useEffect } from "react";
import { images } from "./constant";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const [imagesPerPage, setImagesPerPage] = useState(3); // Initial value

  const totalImages = Object.keys(images).length;

  const nextImages = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjusting image for small screen [chote screen keliye]
      if (window.innerWidth >= 768) {
        setImagesPerPage(3);
      } else {
        setImagesPerPage(1);
      }
    };

    // Initial call
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto slide to the next set of images every 3 seconds
  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      let nextIndex = startIndex + 1;
      if (nextIndex >= totalImages) {
        nextIndex = 0; // Reseting t to the first image
      }
      setStartIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [startIndex, totalImages]);

  const visibleImages = Object.keys(images).slice(
    startIndex,
    startIndex + imagesPerPage
  );

  const isMobileScreen = window.innerWidth <= 768; // Adjust this value as needed

  return (
    <div className="w-3/4 m-auto -z-30">
      <div className="flex h-[100px]">
      <h1 class="text-2xl font-bold mt-[50px] mb-2 mx-auto justify-center items-center ">Best offers for you</h1>



      </div>

      <div className="mt-20 ">
        <div className="bg-white -z-30 h-[160px] text-black rounded-xl flex items-center justify-center relative">
          <button
            onClick={prevImages}
            disabled={startIndex === 0}
            style={{ top: isMobileScreen ? "100px" : 0 }}
          >
            <GrCaretPrevious className="mr-5  gap-0 " />
          </button>
          {visibleImages.map((imageKey, index) => (
            <img
              key={imageKey}
              src={images[imageKey]}
              alt={imageKey}
              className={`h-44 w-584 gap-4 cursor-pointer ${
                index < visibleImages.length - 1 ? "mr-8" : ""
              }`}
            />
          ))}

          <button
            onClick={nextImages}
            disabled={startIndex + imagesPerPage >= totalImages}
            style={{ top: isMobileScreen ? "100px" : 0 }}
          >
            <GrCaretNext className="ml-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
