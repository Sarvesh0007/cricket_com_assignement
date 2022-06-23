import React from "react";
import { MatchCard, SeriesCard } from "../components/cards";
import Navigation from "../components/navigation";
import { useCricketData } from "../graphql/hooks/useCricket";

const activeTabsMenus = [
  ["Upcoming", "upcoming"],
  ["Live", "live"],
  ["Results", "results"],
];
const leagueMenus = [
  ["All", "all"],
  ["International", "international"],
  ["Domestic", "domestic"],
];

const LandingScreen = () => {
  // activeTab can be upcoming, Live, results
  const [activeTab, setActiveTab] = React.useState("upcoming");
  // league can be all, international, domestic
  const [league, setLeague] = React.useState("all");

  const { data } = useCricketData({ activeTab, league });

  return (
    <div className="p-2 bg-black text-white h-screen overflow-auto">
      <h1 className="font-bold text-xl lg:text-2xl">Schedule</h1>
      <Navigation
        menus={activeTabsMenus}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Navigation
        menus={leagueMenus}
        activeTab={league}
        setActiveTab={setLeague}
        twNavClasses="flex justify-center  rounded-full bg-gray-600 m-2 md:w-1/2 md:justify-center md:m-auto md:mt-2"
        twMenuClasses="rounded-full px-3 py-2 font-medium"
        twActiveMenuClasses="border-solid border-2 border-green-500 rounded-full w-40 p-4 grow bg-gray-800"
      />
      {data &&
        data.map((matchEvent) => (
          <>
            <SeriesCard
            key={matchEvent?.seriesID}
              league={league.toUpperCase().substring(0, 3)}
              seriesName={matchEvent.seriesName}
            />
          <div className="flex flex-row width-[400px] overflow-x-auto">
              {matchEvent.matches.map(match => (<MatchCard key={match?.matchNumber} activeTab={activeTab} match={match}/>))}
          </div>
          </>
        ))}
    </div>
  );
};

export default LandingScreen;
