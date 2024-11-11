import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ============================= Create ThemeContext =============================
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        //============================= for palette =============================
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#ffffff" : "#1C1C1C",
          },
          secondary: {
            main: darkMode ? "#f48fb1" : "#f06292",
          },
          background: {
            default: darkMode ? "#1C1C1C" : "#ffffff",
            paper: darkMode ? "#121212" : "#f4f4f4",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
            secondary: darkMode ? "#bdbdbd" : "#616161",
          },
        },
        // ============================= typography =============================
        typography: {
          fontFamily: "Mulish, serif",
          fontSize: 12,
          fontWeight: 500,
          h1: {
            fontSize: 40,
            fontWeight: 700,
          },
          h2: {
            fontSize: 30,
            fontWeight: 600,
          },
          h3: {
            fontSize: 24,
            fontWeight: 500,
          },
          h4: {
            fontSize: 20,
            fontWeight: 400,
          },
          h5: {
            fontSize: 16,
            fontWeight: 300,
          },
          h6: {
            fontSize: 14,
            fontWeight: 400,
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
