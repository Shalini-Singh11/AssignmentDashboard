export const containerStyle = (darkMode) => ({
  padding: 2,
  backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB", 
  borderRadius: "16px",
  width: "100%", 
});

export const titleStyle = (darkMode) => ({
  marginBottom: "16px",
  fontWeight: "bold",
  color: darkMode ? "#FFF" : "#000", 
});

export const doughnutWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  maxHeight: 137,
  width: "100%",
};

export const DoughnutDatacontain = {
  marginBottom: "6px !important",
};

export const legendItemStyle = (darkMode) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  color: darkMode ? "#FFF" : "#000",
  fontSize: { xs: "0.875rem", sm: "1rem" }, 
});

export const colorBoxStyle = (backgroundColor) => ({
  width: 15,
  height: 12,
  backgroundColor: backgroundColor,
  borderRadius: "50%",
  marginRight: 1,
});

export const valueStyle = {
  paddingLeft: "16px",
};
