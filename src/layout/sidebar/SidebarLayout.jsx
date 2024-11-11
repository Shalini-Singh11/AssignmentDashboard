import React, { useContext } from "react";
import {
  Drawer,
  List,
  Typography,
  Box,
  Avatar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";
import ListIcon from '@mui/icons-material/List';
//================= Import UI Data =================
import { dashboardItems, pageItems } from "../../uidata/LeftSidebarData";
//================= Profile image =================
import userImage from "../../assets/ByeWind.svg";
//================= Import SidebarListItem component =================
import SidebarListItem from "../../components/leftsidebar/ListItemComponent";

//================= Import styles =================
import {
  drawerStyle,
  iconStyle,
  sectionTitleStyle,
  listItemStyle,
  userBoxStyle,
  listStyle,
} from "./style";

const SidebarLayout = ({ open }) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const [openDropdown, setOpenDropdown] = React.useState({});

  const handleToggle = (key) => {
    setOpenDropdown((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{ style: drawerStyle(darkMode, theme, open) }}
    >
      <Box sx={userBoxStyle}>
        <Avatar src={userImage} alt="User Image" sx={iconStyle(darkMode)} />
        <Typography>ByeWind</Typography>
      </Box>

      {/*======================= Favorites and Recently =========================*/}
      <div style={listStyle}>
        <Typography sx={sectionTitleStyle(darkMode)}>Favorites</Typography>
        <Typography sx={sectionTitleStyle(darkMode, true)}>Recently</Typography>
      </div>

      {/*===================== show overview and projects =====================*/}
      <ul style={listItemStyle}>
        {["Overview", "Projects"].map((text, index) => (
          <li key={index} style={listItemStyle.listItem}>
            <span style={listItemStyle.bullet}>•</span>
            <Typography>{text}</Typography>
          </li>
        ))}
      </ul>

      {/*=================== Dashboards Section ===========================*/}
      <Typography sx={sectionTitleStyle(darkMode)} paddingY={3}>
        Dashboards
      </Typography>
      <List>
        {dashboardItems.map((item, index) => (
          <SidebarListItem
            key={index}
            item={item}
            onToggle={handleToggle}
            isOpen={openDropdown[item.text]}
            iconStyle={iconStyle(darkMode)}
          />
        ))}
      </List>

      {/*========================= Pages Section =====================*/}
      <Typography sx={sectionTitleStyle(darkMode)} paddingY={3}>
        Pages
      </Typography>
      <List>
        {pageItems.map((item, index) => (
          <SidebarListItem
            key={index}
            item={item}
            onToggle={handleToggle}
            isOpen={openDropdown[item.text]}
            iconStyle={iconStyle(darkMode)}
          />
        ))}
      </List>
      {/*========================= List Section =====================*/}
      <Typography sx={sectionTitleStyle(darkMode)} paddingY={3}>List</Typography>
      <List>
        <a href="/List" style={{ textDecoration: 'none' }}>
          <ListItem button >
            <ListItemIcon sx={{ minWidth: 29 }}>
              <ListIcon sx={iconStyle(darkMode)} />
            </ListItemIcon>
            <ListItemText
              primary="OrderList"
              sx={{
                fontWeight: 'normal',
                fontSize: '1rem',
                color: darkMode ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            />
          </ListItem>
        </a>
      </List>
    </Drawer>
  );
};

export default SidebarLayout;
