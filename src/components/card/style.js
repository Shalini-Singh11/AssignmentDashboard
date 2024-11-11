export const cardClass = {
  padding: "16px",
  borderRadius: "16px",
  height: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  position: "relative",
  transition: "all 0.3s ease-in-out", 
};

export const Cardtext = {
  letterSpacing: "1px",
  marginBottom: "5px",
};

export const iconStyle = {
  fontSize: "20px",
};

export const hoverCardStyle = {
  borderRadius: "16px",
  padding: 0,
  justifyContent: "space-between",
  transition: "transform 0.3s ease", 
  "&:hover": {
    justifyContent: "center",
  },
  "&:hover .value": {
    transform: "translateX(105%)",
   
  },
  "&:hover .change": {
    transform: "translateX(-110%)",
  },
};