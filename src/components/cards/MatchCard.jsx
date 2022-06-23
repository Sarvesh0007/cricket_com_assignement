import React from "react";

const CardHeader = ({ badgeTitle = "", match }) => (
  <div className="flex flex-row justify-between w-full">
    <div className="flex flex-col">
      <h4 className="w-full m-1">
        {(match?.matchNumber.split(" ")?.[1] || " ") +  " "}
        {match?.matchType}
        {badgeTitle && (
          <span className="rounded-full border-solid border-2 border-blue-400 px-2 py-1 text-blue-300 text-xxsm tracking-[2px] mx-3 justify-center items-center">
            <i className="fa-solid fa-circle m-1 text-xxsm text-center"></i>
            {badgeTitle.toUpperCase()}
          </span>
        )}
      </h4>
      {match?.venue && <div className="w-full p-1">
        <i className="fa-solid fa-location-dot m-1 text-red-400"></i>{match?.venue}
      </div>}
    </div>
    <div>
      <button className="border-solid border-1 bg-gray-700 px-2 py-1 rounded-md hover:bg-gray-500">
        <i className="fa-regular fa-bell"></i>
      </button>
    </div>
  </div>
);

export const MatchCard = ({ activeTab, match }) => {
  return (
    <div className="flex flex-col shadow-lg bg-gray-600 shadow-lg rounded-lg  p-4 m-4 sm:text-sm md:text-md lg:text-lg min-w-[70%]">
      {match &&  <CardHeader badgeTitle={activeTab} match={match} />}
      {/* body */}
      <div className="flex flex-row w-full justify-between bg-gray-700 p-3 rounded-md">
        <span className="m-1">{match?.homeTeamName}</span>
        <span className="rounded-full border-solid border-2 border-green-400 px-3 py-1 text-green-300 text-sm tracking-[2px] text-center bg-gray-800">
          {match?.matchType}
        </span>
        <span>{match?.awayTeamName}</span>
      </div>
      <div className="flex flex-row w-full justify-center bg-gray-700 p-3 rounded-md my-2">
        <span>{match?.matchdate}</span>
      </div>
      {/* footer */}
      {match?.teamsWinProbability?.homeTeamPercentage && <div>
        <h1>Win Percentage</h1>
        <div className="w-full bg-gray-200 h-3 mb-6 rounded-md m-1">
          <div
            className="bg-green-400 h-3 rounded-md"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="flex flex-row justify-between px-1">
          <span className="flex flex-row justify-center items-center "> <i className="fa-solid fa-circle m-1 text-xxsm text-center text-green-400"></i>{match?.homeTeamName} ({match?.teamsWinProbability?.homeTeamPercentage}%)</span>
          <span className="flex flex-row justify-center items-center"> <i className="fa-solid fa-circle m-1 text-xxsm text-center"></i>{match?.awayTeamName} ({match?.teamsWinProbability?.awayTeamPercentage}%)</span>
        </div>
      </div>}
    </div>
  );
};
