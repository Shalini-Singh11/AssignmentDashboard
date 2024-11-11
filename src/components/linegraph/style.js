export const LineGraphcontainer = (darkMode) => ({
  padding: 3,
  borderRadius: "16px",
  backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB", 
  maxHeight: 385,
  width: "100%", 
  boxSizing: "border-box", 
  "@media (max-width:600px)": {
    maxHeight: "fit-content", 
  },
});

export const headerStyle = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" }, 
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: 2,
  gap: { xs: "0", sm: "10%" }, 
};

export const lineGraphtitle = (darkMode) => ({
  fontWeight: "700",
  marginBottom: 1,
  color: darkMode ? "#FFF" : "#000000", 
  fontSize: { xs: "10px", sm: "1rem" },
});
export const revenueData = (darkMode) => ({ 
  fontSize: { xs: "10px", sm: "1rem" },
});

export const revenueTextStyle = (darkMode) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: 0.5,
  color: darkMode ? "#FFF" : "#000000",
  "& span": {
    marginRight: 0.5,
  },
  fontSize: { xs: "0.9rem" }, 
  gap: "5px", 
});

