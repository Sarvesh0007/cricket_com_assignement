import React from "react";

export const SeriesCard = ({ league, seriesName }) => {
  return (
    <div className="shadow-lg rounded-2xl bg-gray-600 p-4 m-4">
      <div className="flex-row gap-4 flex justify-left items-center">
        <span className="sm:text-sm md:text-md sm:font-light lg:text-lg font-medium bg-red-400 px-2 rounded-lg">{league}</span>
        <div className=" flex flex-col">
          <span className="sm:text-sm md:text-md sm:font-light lg:text-lg font-medium">
            {seriesName}
          </span>
        </div>
      </div>
    </div>
  );
};
