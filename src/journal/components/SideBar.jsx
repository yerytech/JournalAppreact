import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
          >
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {["Enero", "Febrero", "mMrzo ", "Abril"].map((text) => (
            <ListItem
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                  <Grid2
                    container
                    direction="column"
                  >
                    <ListItemText primary={text} />
                    <ListItemText secondary={"una cosa explendorosa"} />
                  </Grid2>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};
