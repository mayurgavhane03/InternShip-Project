import React from "react";
import ContentLoader from "react-content-loader";

const RestroMenuShimmer = () => {
  return (
    <div className="mt-[200px] p-8 items-center justify-center">
      <div className="lg:sm:ml-10 gap-5 ml-[200px] mb-10 flex flex-col items-center justify-center sm:flex-row">
        <div className="w-200  p-4 flex justify-center sm:w-100">
          <ContentLoader
            speed={2}
            width={200}
            height={200}
            viewBox="0 0 200 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={200}
            height={20}
            viewBox="0 0 200 20"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="180" rx="5" ry="5" width="200" height="20" />
          </ContentLoader>
        </div>

        <div className="w-300 lg:p-4 text-center lg:mr-[200px] sm:text-left">
          <ContentLoader
            speed={2}
            width={300}
            height={100}
            viewBox="0 0 300 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="10" rx="5" ry="5" width="300" height="20" />
            <rect x="0" y="40" rx="5" ry="5" width="300" height="20" />
            <rect x="0" y="70" rx="5" ry="5" width="300" height="20" />
          </ContentLoader>
        </div>
      </div>

      <div className="w-full sm:text-center sm:ml-auto lg:">
        <div className="mb-4 ">
          <h3 className="text-2xl items-center justify-center lg:sm:ml-5 font-bold">
            <ContentLoader
              speed={2}
              width={200}
              height={20}
              viewBox="0 0 200 20"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="5" ry="5" width="200" height="20" />
            </ContentLoader>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
            <div className="bg-white p-4 rounded shadow-md w-200" key={index}>
              <ContentLoader
                speed={2}
                width={200}
                height={200}
                viewBox="0 0 200 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
              </ContentLoader>

              <div className="mb-4 mt-6 ">
                <h3 className="text-3xl items-center justify-center font-bold">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="20" />
                  </ContentLoader>
                </h3>
                <h3 className="text-3xl items-center justify-center font-bold mt-2">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="20" />
                  </ContentLoader>
                </h3>
                <h3 className="text-3xl items-center justify-center font-bold mt-2">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="20" />
                  </ContentLoader>
                </h3>
                <h3 className="text-3xl items-center justify-center font-bold mt-2">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="20" />
                  </ContentLoader>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestroMenuShimmer;
