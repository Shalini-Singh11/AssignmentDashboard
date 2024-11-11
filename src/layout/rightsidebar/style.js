export const rightDrawerStyle = (darkMode, theme) => ({
  backgroundColor: darkMode ? "#1C1C1C" : theme.palette.background.default,
  color: darkMode ? "#FFF" : theme.palette.text.primary,
  width: 263,
  right: 0,
  zIndex: 1200,
  padding: "8px",
  top: "auto", 
  height: "100vh", 
  '@media (max-width: 1350px)': {
    top: "60px",
    height: "calc(100vh - 60px)", 
  }
});


  export const rightSidebarText = (darkMode, section) => ({
    padding: "5px",
    fontWeight: "bold",
    color: darkMode ? "#FFF" : "#000", 
    ...(section === "notifications" && {
      paddingTop: "10px", 
    }),
  });
  