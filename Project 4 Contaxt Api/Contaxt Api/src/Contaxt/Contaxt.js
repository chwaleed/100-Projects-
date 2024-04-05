import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return React.useContext(ThemeContext);
}
