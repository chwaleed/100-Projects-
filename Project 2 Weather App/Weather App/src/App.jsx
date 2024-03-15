import React, { useEffect, useState } from "react";
import Clouds from "./assets/Clouds.png";
import axios from "axios";

function App() {
  let api = "dfdb431bb542061998ca66fecc53c5c4";
  const [location, setlocation] = useState("");
  const [temperature, settemperature] = useState("");
  const [name, setname] = useState("");
  const [country, setcountry] = useState("");
  const [condition, setcondition] = useState("");
  const [search, setsearch] = useState("");

  let dir = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${api}`
    )
      .then((e) => e.json())
      .then((e) => e[0])
      .then(({ lat, lon }) => weather(lat, lon));
  };
  let weather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
    )
      .then((e) => e.json())
      .then(
        ({ name, main, sys, weather }) => (
          settemperature(main.temp),
          setname(name),
          setcountry(sys.country),
          setcondition(weather[0].description)
        )
      );
  };
  const handleClick = () => {
    setlocation(search);
  };
  useEffect(() => {
    if (location !== "") {
      dir();
    }
  }, [location]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      weather(latitude, longitude);
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <div className="w-[27%] rounded-md h-[80%] bg-white ">
        <h1 className="font-bold text-[2rem] text-center my-3 text-gray-600 ">
          Weather App
        </h1>
        <hr className="bg-gray-200 h-[2px] " />
        <div className="flex justify-center py-4 gap-2">
          <input
            type="text"
            className="w-[70%]  border-[2px] px-2 py-2 rounded-[1rem] "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <button
            className="px-4 rounded-[1rem] bg-blue-200 font-bold active:bg-blue-300 text-white "
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="  flex justify-center mt-2 ">
          <img className="h-[150px] " src={Clouds} alt="" />
        </div>
        <h1 className="font-bold text-[3rem] text-center text-gray-600 ">
          {temperature ? Math.round(temperature - 273) : "--"} °C
        </h1>
        <p className="font-bold text-[2rem] capitalize text-center mb-3  text-gray-600 ">
          {condition ? condition : "--"}
        </p>
        <p className="font-bold text-[1.5rem] text-center my-3  text-gray-600 ">
          {name ? name : "--"} {country ? country : "--"}
        </p>
      </div>
    </div>
  );
}

export default App;
