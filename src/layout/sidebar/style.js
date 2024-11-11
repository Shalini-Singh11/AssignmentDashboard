
  export const drawerStyle = (darkMode, theme, open) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  height: "100vh",
  width: open ? 200 : 0,
  zIndex: 1200,
  padding: open ? "18px" : 0,
  top: "auto", 
  height: "100vh", 
  '@media (max-width: 1350px)': {
    top: "60px",
    height: "calc(100vh - 60px)", 
  }
});  


  export const iconStyle = (darkMode) => ({
    width: 22,
    height: 22,
    filter: darkMode ? "invert(1)" : "invert(0)", 
  });
  
  export const userBoxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    textAlign: "center",
    gap: "10px",
  };
  
  export const sectionTitleStyle = (darkMode, isRecently = false) => ({
    color: darkMode ? "#B0B0B0" : "#424242", 
    fontWeight: "bold",
    ...(isRecently && { color: "#B0B0B0" }),
    padding: 1 
  });
  
  export const listStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  export const listItemStyle = {
    paddingLeft: "30px",
    marginTop: 0,
    marginBottom: 0,
    listItem: {
      fontSize: "1em",
      listStyle: "none",
      position: "relative",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
    },
    bullet: {
      position: "absolute",
      left: "-16px",
      fontSize: "35px",
      color: "grey",
    },
  };
  