import React, { useContext } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
//======================== react-simple-Map ========================
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { ThemeContext } from "../../theme/ThemeContext";
// ======================== STYle ========================
import {
  geoContainer,
  geoGraphText,
  markerCircleStyle,
  progressBarStyle,
  locationTextStyle,
} from "./style"; 
//======================== UI DATA ========================
import { locations,
  darkModeSettings,
  lightModeSettings} from "../../uidata/DashboardData"

const GeoGraphComponent = () => {
  const { darkMode } = useContext(ThemeContext); 

// ======================== this is dummy map of countries which come from this url ========================

  const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

  const currentSettings = darkMode ? darkModeSettings : lightModeSettings;

  return (
    <Box sx={geoContainer(darkMode)}>
      <Typography sx={geoGraphText(darkMode)}>Revenue by Location</Typography>

      {/*======================== Composable Map ========================*/}
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 120,
          center: [0, 30],
        }}
        width={600}
        height={400}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={currentSettings.geographyFill} 
                stroke={currentSettings.geographyStroke} 
              />
            ))
          }
        </Geographies>

        {/*======================== Markers ========================*/}
        {locations.map(({ city, revenue, coordinates }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <circle
              r={Math.max(revenue / 20, 15)} 
              fill={currentSettings.markerFill} 
              stroke={currentSettings.markerStroke}
              strokeWidth="4.5"
              sx={markerCircleStyle(darkMode)} 
            />
          </Marker>
        ))}
      </ComposableMap>

      {/*======================== Location Data and Progress Bar ========================*/}
      <Box sx={{ width: "100%", mt: 2 }}>
        {locations.map((location, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography sx={locationTextStyle(darkMode)}>
              {location.city}: <strong>{location.revenue}K</strong>
            </Typography>
            <LinearProgress
              variant="determinate"
              value={location.revenue}
              sx={progressBarStyle(darkMode, location.color)} 
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GeoGraphComponent;
