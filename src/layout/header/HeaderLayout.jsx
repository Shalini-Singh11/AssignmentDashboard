import React, { useContext } from "react";
import {
  IconButton,
  Box,
  Grid,
  Breadcrumbs,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";

// ============ UI DATA ========================
import {
  StarIcon,
  toggleIcon,
  historyIcon,
  bellIcon,
  rightSidebar,
  SidebarIcon,
  searchImageIcon,
  searchTextIcon,
} from "../../uidata/HeaderData";

// ============ Style ========================
import {
  headerContainerStyle,
  iconStyle,
  searchStyle,
  inputAdornmentStyle,
} from "./style";

const HeaderLayout = ({ onSidebarToggle, onRightSidebarToggle }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={headerContainerStyle(darkMode)}>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={8} display="flex" alignItems="center">
          <IconButton onClick={onSidebarToggle}>
            <img src={SidebarIcon} alt="sidebar" style={iconStyle(darkMode)} />
          </IconButton>
          <IconButton>
            <img src={StarIcon} alt="star" style={iconStyle(darkMode)} />
          </IconButton>
          <Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ display: "flex", alignItems: "center", padding: "8px" }}
            >
              <Typography color="grey">Dashboard</Typography>
              <Typography color="textPrimary">Default</Typography>
            </Breadcrumbs>
          </Box>
        </Grid>

        <Grid
          item
          xs={8}
          display="flex"
          alignItems="center"
          justifyContent={"end"}
        >
          <Box marginX={1}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search..."
              sx={{
                ...searchStyle(darkMode),
                display: { xs: "none", sm: "block" }, // Hide on screens smaller than "sm"
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src={searchImageIcon}
                      alt="search-left"
                      style={inputAdornmentStyle(darkMode)}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={searchTextIcon}
                      alt="search-right"
                      style={inputAdornmentStyle(darkMode)}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <IconButton onClick={handleThemeToggle}>
            <img
              src={toggleIcon}
              alt="theme toggle"
              style={iconStyle(darkMode)}
            />
          </IconButton>
          <IconButton>
            <img src={historyIcon} alt="history" style={iconStyle(darkMode)} />
          </IconButton>
          <IconButton>
            <img
              src={bellIcon}
              alt="notifications"
              style={iconStyle(darkMode)}
            />
          </IconButton>
          <IconButton onClick={onRightSidebarToggle}>
            <img
              src={rightSidebar}
              alt="Rightsidebar"
              style={iconStyle(darkMode)}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderLayout;
