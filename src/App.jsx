import { useEffect, useState } from "react";
import axios from "axios";
import dayMobile from "./assets/mobile/bg-image-daytime.jpg";
import nightMobile from "./assets/mobile/bg-image-nighttime.jpg";
import dayDesk from "./assets/desktop/bg-image-daytime.jpg";
import nightDesk from "./assets/desktop/bg-image-nighttime.jpg";
import daySound from "./assets/day.mp3";
import nightSound from "./assets/night.mp3";
import Timer from "./components/Timer/Timer";
import Quote from "./components/Quote/Quote";
import Detail from "./components/Detail/Detail";

const url = `https://api.ipbase.com/v2/info?apikey=ipb_live_FegjelJUvohxnRDOqM73xmJDl8icSzn552jLiszD`;
const validateTime = () => {
  let timeOfDay = "day";
  let Greeting = "Good Morning";
  let sound;
  const time = new Date().getHours();
  if (time > 18 || time < 6) {
    timeOfDay = "night";
    sound = nightSound;
  } else {
    timeOfDay = "day";
    sound = daySound;
  }
  if (time > 11 && time < 17) {
    Greeting = "Good Afternoon";
  } else if (time > 16 && time < 21) {
    Greeting = "Good Evening";
  } else {
    Greeting = "Good Night";
  }
  return { timeOfDay, Greeting, sound };
};

const getDay = () => {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return day;
};

const getLocationData = () =>
  axios
    .get(url)
    .then((response) => response)
    .catch((error) => alert(error));

function App() {
  const [showMore, setShowMore] = useState(false);
  const [location, setLocation] = useState({
    city: "Kolkata",
    country: "India",
    region: "West Bengal",
    code: "IST",
    timezone: "Asia/Kolkata",
  });
  const { timeOfDay, Greeting, sound } = validateTime();
  const music = new Audio(sound);
  const bg = {
    mobile: timeOfDay === "day" ? dayMobile : nightMobile,
    desk: timeOfDay === "day" ? dayDesk : nightDesk,
  };
  const mediaWidth = window.innerWidth;

  // useEffect(() => {
  //   const result = async () => {
  //     const { data: result } = await getLocationData();
  //     console.log(result);
  //     const { location, timezone } = result.data;
  //     const { city, region, country } = location;

  //     setLocation({
  //       city: city.name,
  //       region: region.name,
  //       country: country.name,
  //       code: timezone.code,
  //       timezone: timezone.id,
  //     });
  //   };
  //   result();
  // }, []);

  const playAudio = () => {
    if (music.paused) {
      music.play();
      music.loop = true;
      music.volume = 0.5;
    } else {
      return;
    }
  };
  const setUpdatedContent = () => {
    setShowMore((showMore) => !showMore);
  };

  return (
    <main className="text-amber-100 min-h-screen" onClick={playAudio}>
      <img
        src={mediaWidth <= 480 ? bg.mobile : bg.desk}
        alt="bgImg"
        className="fixed top-0 min-w-screen min-h-screen saturate-175 contrast-125 -z-10"
      />
      <section className={`flex flex-col min-h-screen justify-between`}>
        {!showMore && <Quote />}
        <Timer
          greeting={Greeting}
          timeOfDay={timeOfDay}
          updateContent={setUpdatedContent}
          location={location}
        />
      </section>
      {showMore && (
        <section className="min-w-full absolute bottom-0 sm:px-16 sm:py-12 bg-amber-50 text-black font-bold tracking-wide flex flex-col sm:flex-row sm:justify-around sm:items-center uppercase p-4">
          <Detail timezone={location.timezone} day={getDay()} />
        </section>
      )}
    </main>
  );
}

export default App;
