import React, { useState } from "react";
import sun from "../../assets/desktop/icon-sun.svg";
import moon from "../../assets/desktop/icon-moon.svg";
import dropdown from "../../assets/desktop/icon-arrow-down.svg";
import DateContainer from "../Date/DateContainer";

const Timer = ({ greeting, timeOfDay, updateContent, location }) => {
  const [showQuote, setShowQuote] = useState(true);

  const setShowContent = () => {
    setShowQuote((showQuote) => !showQuote);
    updateContent();
  };
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 uppercase p-4 pb-8">
      <div className="sm:p-16 flex flex-col gap-2 tracking-wide">
        <div className="text-lg sm:text-xl font-light">
          <img
            src={timeOfDay === "day" ? sun : moon}
            alt="sun"
            className="object-contain inline w-4 pb-1"
          />
          <p className="inline-block px-2">{greeting}, it's currently</p>
        </div>
        <DateContainer location={location} />
        <div className="text-xl sm:text-2xl font-normal">{`In ${location.city}, ${location.country}`}</div>
      </div>
      <button
        onClick={setShowContent}
        className="flex items-center justify-around w-32 sm:w-36 sm:h-12 p-2 bg-amber-100 text-gray-700 shadow-lg uppercase text-sm sm:text-lg sm:mr-16 rounded-3xl tracking-widest font-medium"
      >
        {showQuote ? "more" : "less"}
        <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
          <img src={dropdown} alt="down" className="w-2/5 sm:w-2/4" />
        </div>
      </button>
    </div>
  );
};

export default Timer;
