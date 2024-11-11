import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ThemeContext } from "../../theme/ThemeContext";
//================= UI DATA =================
import { datasets, labels, linechartOptions } from "../../uidata/DashboardData";
// ================= style =================
import {
  LineGraphcontainer,
  headerStyle,
  lineGraphtitle,
  revenueTextStyle,
  revenueData
} from "./style";

const LineGraphComponent = () => {
  const { darkMode } = useContext(ThemeContext);

  const datasetsData = datasets(darkMode);

  return (
    <Box sx={LineGraphcontainer(darkMode)}>
      <Box sx={headerStyle}>
        <Typography variant="h5" sx={lineGraphtitle(darkMode)}>
          Revenue
        </Typography>
        {datasetsData.map((dataset, index) => (
          <Typography key={index} sx={revenueTextStyle(darkMode)}>
            <span style={{ color: dataset.borderColor }}>•</span>{" "}
            {dataset.label}&nbsp;&nbsp;
            <Typography sx={revenueData}>{index === 0 ? "$58,211" : "$68,768"}</Typography>
          </Typography>
        ))}
      </Box>

      {/*================= Render the Line chart =================*/}
      <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <Line
        data={{ labels, datasets: datasetsData }}
        options={linechartOptions(darkMode)}
        height={300}
        width={700}
      />
      </Box>
    </Box>
  );
};

export default LineGraphComponent;
