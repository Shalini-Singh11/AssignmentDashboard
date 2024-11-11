import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ThemeContext } from "../../theme/ThemeContext"; 
import { getBarData , barchartOptions} from "../../uidata/DashboardData";
import { bargraphContainer, bargraphText } from "./style"; 

const BarGraphComponent = () => {
  const { darkMode } = useContext(ThemeContext);

  const barData = getBarData(darkMode);

  return (
    <Box sx={bargraphContainer(darkMode)}>
      <Typography sx={bargraphText(darkMode)}>Projections vs Actuals</Typography>
      <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <Bar
        data={barData}
        options={barchartOptions(darkMode)}
        height={190}
      />
      </Box>
    </Box>
  );
};

export default BarGraphComponent;