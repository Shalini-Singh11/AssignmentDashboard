export const geoContainer = (darkMode) => ({
    padding: 2,
    backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB", 
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: 385,
    "@media (max-width:600px)": {
      maxHeight: "fit-content", 
    },
  });
  
  export const geoGraphText = (darkMode) => ({
    color: darkMode ? "#FFF" : "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  });

  export const markerCircleStyle = (darkMode) => ({
    boxShadow: "0px 2px 2px 0px #0000001A", 
  });
  
  export const progressBarStyle = (darkMode, locationColor) => ({
    height: 4,
    borderRadius: 2,
    backgroundColor: darkMode ? "#333" : "#ECEFF1",
    "& .MuiLinearProgress-bar": {
      backgroundColor: locationColor,
    },
  });
  
  export const locationTextStyle = (darkMode) => ({
    color: darkMode ? "#FFF" : "#000",
  });
  