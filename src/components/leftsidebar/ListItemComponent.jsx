import React from "react";
import { Box, ListItem, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// =================== Import styles ===================
import { arrowStyle, listItemStyle, collapseStyle, submenuStyle } from "./style";

const ListItemComponent = ({ item, onToggle, isOpen, iconStyle }) => {
  return (
    <React.Fragment>
      <ListItem button onClick={() => onToggle(item.text)} sx={listItemStyle}>
        <ArrowForwardIosIcon sx={arrowStyle(isOpen)} />
        <ListItemIcon sx={{ minWidth: 29 }}>
          <Box component="img" src={item.icon} alt={`${item.text} Icon`} sx={iconStyle} />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={collapseStyle}>
          {(item.dropdowns || ["Submenu 1", "Submenu 2"]).map((submenu, subIndex) => (
            <ListItem button key={subIndex} sx={submenuStyle}>
              <ListItemText primary={submenu} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ListItemComponent;
