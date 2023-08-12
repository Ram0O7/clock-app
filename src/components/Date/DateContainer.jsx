import React, { useEffect, useState } from "react";

const DateContainer = ({ location }) => {
  const [time, setTime] = useState({
    hrs: new Date().getHours(),
    min: new Date().getMinutes(),
  });
  const [tikTok, setTiktok] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime({ hrs: new Date().getHours(), min: new Date().getMinutes() });
      setTiktok((prevTikStatus) => !prevTikStatus);
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <h1 className="text-7xl sm:text-9xl font-extrabold drop-shadow-2xl block">
        {time.hrs >= 10 ? time.hrs : `0${time.hrs}`}
        <span
          className={`${tikTok ? "text-white" : "text-amber-100"} font-bold`}
        >
          {" : "}
        </span>
        {time.min >= 10 ? time.min : `0${time.min}`}
        <span className="text-2xl sm:text-5xl font-light">
          &nbsp;{location.code}
        </span>
      </h1>
    </div>
  );
};

export default DateContainer;
