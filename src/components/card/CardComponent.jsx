import React, { useContext } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
// ===================== UI CARD DATA ============================== 
import { cardData } from "../../uidata/DashboardData"; 
// ================= Style ===============================
import { cardClass, Cardtext, iconStyle, hoverCardStyle } from "./style"; 

const CardComponent = () => {
  const { darkMode } = useContext(ThemeContext); 

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => {
        let textClassName = Cardtext;
        //=====  default background and text colors for light mode =========
        let backgroundColor = card.color; 
        let textColor = "#000000";

        if (darkMode) {
          //================ Dark mode ===================
          if (index === 0) {
            backgroundColor = "#E3F5FF"; 
            textColor = "#000000"; 
          } else if (index === 1 || index === 2) {   //=========== card 2nd and 3rd contain same color ===========
            backgroundColor = "#FFFFFF0D"; 
            textColor = "#ffffff"; 
          } else if (index === 3) {
            backgroundColor = "#E5ECF6"; 
            textColor = "#000000"; 
          }
        } else {
          backgroundColor = card.color; 
          textColor = "#000000"; 
        }

        return (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box sx={{ ...cardClass, backgroundColor }} className="card">
              <Typography variant="h5" sx={{ ...textClassName, color: textColor, fontWeight: 600 }}>
                {card.title}
              </Typography>
              <IconButton 
                display={"flex"} 
                alignItems={"center"} 
                justifyContent={"space-between"} 
                sx={hoverCardStyle} 
              >
                <Typography variant="h2" sx={{ ...textClassName, color: textColor }} className="value">
                  {card.value}
                </Typography>
                <Typography variant="h6" sx={{ ...textClassName, color: textColor }} display={"flex"} alignItems={"center"} className="change">
                  {card.change}
                  <card.icon sx={{ ...iconStyle, color: textColor }} /> 
                </Typography>
              </IconButton>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardComponent;
