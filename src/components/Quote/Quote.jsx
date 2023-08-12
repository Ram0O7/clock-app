import React, { useEffect, useState } from "react";
import axios from "axios";
import reset from "../../assets/desktop/icon-refresh.svg";

const Quote = () => {
  const [quote, setQuote] = useState(
    "Bagair mange kisi ko gyan nahi dena chahiye!"
  );
  const [author, setAuthor] = useState("lalit mishra");
  useEffect(() => {
    axios
      .get("https://programming-quotesapi.vercel.app/api/random")
      .then((response) => {
        const { data } = response;
        setAuthor(data.author);
        setQuote(data.quote);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="sm:p-16 px-4 py-8 flex flex-col gap-2">
      <div className="w-full flex gap-2 sm:max-w-3xl">
        <h1 className="text-lg sm:text-xl drop-shadow-xl">"{quote}"</h1>
        <img
          src={reset}
          alt="reset"
          className="object-contain pl-4"
          onClick={() => window.location.reload()}
        />
      </div>
      <p className="font-bold py-2 text-lg sm:text-xl drop-shadow-lg">
        {author}
      </p>
    </div>
  );
};

export default Quote;
