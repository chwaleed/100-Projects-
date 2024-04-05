import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { ThemeProvider } from "./Contaxt/Contaxt";
import Loading from "./Loading/Loading";

function App() {
  const [themeMode, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const mode = document.querySelector("html");
    mode.classList.remove("light", "dark");
    mode.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <Loading />
      <div className="overflow-hidden bg-[#EDF2F8] dark:bg-[#1f2937e8]  ">
        <div class="  w-screen px-2 py-6   md:px-24 md:py-10 md:absolute  flex flex-row justify-end transition-all ease-in-out">
          <div class="flex flex-row justify-between toggle">
            <label for="dark-toggle" class="flex items-center  cursor-pointer">
              <div class="relative">
                <input
                  type="checkbox"
                  name="dark-mode"
                  id="dark-toggle"
                  class="checkbox hidden"
                  onChange={toggleTheme}
                />
                <div class="block border-[1px]  dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                <div
                  class={`dot ${
                    themeMode == "light" ? "none" : "translate-x-[100%]"
                  } absolute left-1  top-1 dark:bg-white  dark:border-white bg-gray-800 w-6 h-6 rounded-full transition`}
                ></div>
              </div>
              <div class="ml-3  text-gray-900 dark:text-white font-medium">
                Dark Mode
              </div>
            </label>
          </div>
        </div>
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
