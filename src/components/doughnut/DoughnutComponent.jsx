import React, { useContext } from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { ThemeContext } from "../../theme/ThemeContext";
import {
  containerStyle,
  titleStyle,
  doughnutWrapperStyle,
  legendItemStyle,
  colorBoxStyle,
  valueStyle,
  DoughnutDatacontain,
} from "./style";

const data = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  datasets: [
    {
      data: [300.56, 135.18, 154.02, 48.96],
      backgroundColor: ["#000000", "#BAEDBD", "#95A4FC", "#B1E3FF"],
      hoverOffset: 4,
      borderRadius: 50, 
      spacing: 2,
      cutout: "60%",
    },
  ],
};

const options = {
  cutout: "65%",
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
      },
    },
  },
};

function DoughnutComponent() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box sx={containerStyle(darkMode)}>
      <Typography sx={titleStyle(darkMode)}>Total Sales</Typography>
      <div style={doughnutWrapperStyle}>
        <Doughnut data={data} options={options} />
      </div>

      {/*================ Custom Legend =============== */}

      <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
        {data.labels.map((label, index) => (
          <Grid key={index} container sx={DoughnutDatacontain}>
            <Grid item xs={6} display={"flex"} alignItems={"center"}>
              <Box sx={colorBoxStyle(data.datasets[0].backgroundColor[index])} />
              <Typography sx={legendItemStyle(darkMode)}>{label}</Typography>
            </Grid>
            <Grid item xs={6} sx={valueStyle}>
              <Typography sx={legendItemStyle(darkMode)}>
                ${data.datasets[0].data[index].toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
}

export default DoughnutComponent;
