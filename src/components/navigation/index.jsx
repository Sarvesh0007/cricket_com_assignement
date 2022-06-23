import React from "react";

const Navigation = ({
  menus,
  activeTab,
  setActiveTab,
  twNavClasses,
  twMenuClasses,
  twActiveMenuClasses,
}) => (
  <nav className={twNavClasses || "flex sm:justify-center space-x-4 md:w-1/2 md:justify-center md:m-auto"}>
    {menus.map(
      ([title, url]) =>
        (url === activeTab && (
          <button
          key={url}
            className={`${twMenuClasses} ${
              twActiveMenuClasses ||
              "border-b-4 border-blue-500 text-blue-500 grow"
            }`}
            onClick={() => setActiveTab(url)}
          >
            {title}
          </button>
        )) || (
          <button
          key={url}
            className={
              twMenuClasses ||
              "px-3 py-2 text-slate-400 font-medium hover:bg-slate-500 hover:text-slate-900"
            }
            onClick={() => setActiveTab(url)}
          >
            {title}
          </button>
        )
    )}
  </nav>
);

export default Navigation;
