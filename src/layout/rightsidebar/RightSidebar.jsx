import React, { useContext } from "react";
import { Drawer, List, Typography, Box } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";

// ============== Import UI Data =========================
import {
  notifications,
  activities,
  contacts,
} from "../../uidata/RightSidebarData";

//============== Import ListItemComponent ==============
import RightSidebarListItemComponent from "../../components/rightsidebar/ListItemComponent";

// ============== Import styles ==============
import { rightDrawerStyle, rightSidebarText } from "./style";

const RightSidebar = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      PaperProps={{ style: rightDrawerStyle(darkMode, theme) }}
    >
      {/*============== Notifications Section ==============*/}
      <Typography sx={rightSidebarText(darkMode, "notifications")}>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <RightSidebarListItemComponent
            key={index}
            img={notification.img}
            text={notification.text}
            time={notification.time}
            section="notification"
          />
        ))}
      </List>

      {/* ============== Activities Section ==============*/}
      <Typography sx={rightSidebarText(darkMode, "activities")}>
        Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <RightSidebarListItemComponent
            key={index}
            img={activity.img}
            text={activity.text}
            time={activity.time}
            section="activity"
          />
        ))}
      </List>

      {/*============== Contacts Section ==============*/}
      <Typography sx={rightSidebarText(darkMode, "contacts")}>
        Contacts
      </Typography>
      <List>
        {contacts.map((contact, index) => (
          <RightSidebarListItemComponent
            key={index}
            img={contact.img}
            text={contact.name}
            time={""}
            section="contacts"
          />
        ))}
      </List>
    </Drawer>
  );
};

export default RightSidebar;
