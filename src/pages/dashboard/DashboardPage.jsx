import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// ============================= COMPONENTS =============================
import Card from "../../components/card/CardComponent";
import BarGraph from "../../components/bargraph/BarGraphComponent";
import LineGraph from "../../components/linegraph/LineGraphComponent";
import GeographyMap from "../../components/geograph/GeoGraphComponent";
import DoughnutGraph from "../../components/doughnut/DoughnutComponent";
import DataTable from "../../components/table/TableComponent";

const Dashboard = () => {
  return (
    <Box >
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        eCommerce
      </Typography>

      {/*============================= contain card and bargraph =============================*/}
      <Grid container spacing={2}>
        <Grid item xs={11} md={6}>
          <Card />
        </Grid>
        <Grid item xs={11} md={6}>
          <BarGraph />
        </Grid>
      </Grid>

      {/*============================= contain Line Graoh and GeoGraph Map =============================*/}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={11} md={9}>
          <LineGraph />
        </Grid>
        <Grid item xs={11} md={3}>
          <GeographyMap />
        </Grid>
      </Grid>

      {/*============================= contain DataTable and Doughtnut Graph =============================*/}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={11} md={9}>
          <DataTable />
        </Grid>
        <Grid item xs={11} md={3}>
          <DoughnutGraph />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
