import React, { useEffect } from "react";
import axios from "axios";

function Card() {
  const [data, setData] = React.useState({});
  const getData = () => {
    axios
      .get("https://api.github.com/users/chwaleed")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen px-5 w-screen flex justify-center items-center">
      <div class="  md:px-16 md:py-6 px-10 py-6  md:w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col  items-center pb-10">
          <img
            class="w-72  mb-3 rounded-full shadow-lg"
            src={data.avatar_url}
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data.name}
          </h5>
          <span class="text-sm w-full text-gray-500 dark:text-gray-400">
            {data.bio || "No bio provided"}
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </a>
            <a
              href="#"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
