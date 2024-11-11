export const headerContainerStyle = (darkMode) => ({
    paddingY: "10px",
    borderBottom: darkMode ? "0.5px solid #333333" : "0.5px solid #E0E0E0",
    backgroundColor: darkMode ? "#1C1C1C" : "#FFFFFF",
  });
  
  export const iconStyle = (darkMode) => ({
    width: 24,
    height: 24,
    filter: darkMode ? "invert(1)" : "invert(0)", 
  });
  
  export const searchStyle = (darkMode) => ({
    backgroundColor: darkMode ? "#333" : "#f5f5f5",
    borderRadius: 8,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", 
      },
      "&:hover fieldset": {
        border: "none", 
      },
      "&.Mui-focused fieldset": {
        border: "none", 
      },
    },
    "& .MuiInputBase-root": {
      paddingLeft: 2, 
      paddingRight: 2, 
    },
  });
  
  export const inputAdornmentStyle = (darkMode) => ({
    width: 15,
    height: 15,
    filter: darkMode ? "brightness(20)" : "none", 
  });
  