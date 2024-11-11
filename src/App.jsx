import React, { useState, useEffect } from "react";
import ThemeContextProvider from "./theme/ThemeContext";
import { CssBaseline, StyledEngineProvider, Box } from "@mui/material";
// =================== LAYOUT ==========================
import Sidebar from "./layout/sidebar/SidebarLayout";
import RightSidebar from "./layout/rightsidebar/RightSidebar";
import Header from "./layout/header/HeaderLayout";
// ====================== routes ===================
import Routes from "./router/Mainroute";
import "./App.css";

const App = () => {
  const isSmallScreenInitial = window.innerWidth < 1100; 
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreenInitial); 
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isSmallScreenInitial); 
  const [isSmallScreen, setIsSmallScreen] = useState(isSmallScreenInitial);

  
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1100;
      setIsSmallScreen(isSmall);

      if (isSmall) {
        setSidebarOpen(false);
        setRightSidebarOpen(false);
      } else {
        setSidebarOpen(true);
        setRightSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);


  return (
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <CssBaseline />
        <Box display="flex" height="100vh" overflow="hidden">
          {/*============== Header - Adjust width based on sidebar =================*/}
          <Box
            component="header"
            sx={{
              position: "fixed",
              top: 0,
              left: sidebarOpen && !isSmallScreen ? "200px" : "0",
              right: rightSidebarOpen && !isSmallScreen ? "263px" : "0",
              width: `calc(100% - ${sidebarOpen && !isSmallScreen ? 200 : 0}px - ${rightSidebarOpen && !isSmallScreen ? 263 : 0}px)`,
              zIndex: 1,
            }}
          >
            <Header onSidebarToggle={toggleSidebar} onRightSidebarToggle={toggleRightSidebar} />
          </Box>

          {/*===================== Left Sidebar as Overlay on Small Screens ======================*/}
          {sidebarOpen && (
            <Box
              component="div"
              sx={{
                position: isSmallScreen ? "fixed" : "relative",
                zIndex: 1200,
                top: isSmallScreen ? "64px" : "0", 
                height: isSmallScreen ? "calc(100vh - 64px)" : "100vh", 
              }}
            >
              <Sidebar open={sidebarOpen} />
            </Box>
          )}

          {/*================ Main Content ===================*/}
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            marginLeft={isSmallScreen || !sidebarOpen ? "0px" : "200px"}
            marginRight={isSmallScreen || !rightSidebarOpen ? "0px" : "263px"}
            mt={8}
          >
            <Box component="main" flexGrow={1} overflow="auto" sx={{ padding: 3 }}>
              <Routes />
            </Box>
          </Box>

          {/*================== Right Sidebar as Overlay on Small Screens ============================*/}
          {rightSidebarOpen && (
            <Box
              component="div"
              sx={{
                position: isSmallScreen ? "fixed" : "relative",
                right: 0,
                zIndex: 1200,
                top: isSmallScreen ? "64px" : "0", 
                height: isSmallScreen ? "calc(100vh - 64px)" : "100vh",
              }}
            >
              <RightSidebar />
            </Box>
          )}
        </Box>
      </ThemeContextProvider>
    </StyledEngineProvider>
  );
};

export default App;
