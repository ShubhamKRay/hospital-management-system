


import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import menuItems from "./menuItems";

const drawerWidth = 250;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>

                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar;