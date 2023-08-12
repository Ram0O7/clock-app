import React from "react";

const Detail = ({ timezone, day }) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return (
    <>
      <div className="sm:w-2/4 text-center">
        <div className="sm:py-4">
          <p className="text-xs text-gray-600">current timezone</p>
          <h1 className="text-2xl sm:text-4xl py-2">{timezone}</h1>
        </div>
        <div className="sm:py-4">
          <p className="text-xs text-gray-600">day of the year</p>
          <h1 className="text-2xl sm:text-4xl py-2">{day}</h1>
        </div>
      </div>
      <div className="sm:w-2/4 text-center">
        <div className="sm:py-4">
          <p className="text-xs text-gray-600">day of the week</p>
          <h1 className="text-2xl sm:text-4xl py-2">
            {days[new Date().getDay()]}
          </h1>
        </div>
        <div className="sm:py-4">
          <p className="text-xs text-gray-600">week number</p>
          <h1 className="text-2xl sm:text-4xl py-2">{Math.floor(day / 7)}</h1>
        </div>
      </div>
    </>
  );
};

export default Detail;
