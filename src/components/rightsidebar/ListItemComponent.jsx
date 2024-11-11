import React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ListItemComponent = ({ img, text, time, section }) => {
  const theme = useTheme();
  
  //========== Extra style for notification ==========
  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: theme.palette.mode === "dark" ? "white" : "#E3F5FF",
    padding: "5px",
  };

  return (
    <ListItem disableGutters>
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        style={{ width: "100%" }}
      >
        {/*================= If section is 'notification', apply circleStyle ======================*/}
        {section === "notification" ? (
          <Box sx={circleStyle}>
            <Box
              component="img"
              src={img}
              sx={{ objectFit: "contain" }}
            />
          </Box>
        ) : (
          <Box component="img" src={img} sx={{ width: "15%" }} />
        )}
        <Box>
          <Typography>{text}</Typography>
          <Typography variant="body2" color="textSecondary">
            {time}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default ListItemComponent;
