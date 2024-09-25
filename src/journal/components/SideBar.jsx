import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
// @ts-ignore
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {
  // @ts-ignore
  const { displayName } = useSelector((state) => state.auth);
  // @ts-ignore
  const { notes } = useSelector((state) => state.journal);
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
          {notes?.map((note) => (
            <SideBarItem
              id={note.id}
              key={note.id}
              date={note.date}
              imageUrls={note.imageUrls}
              title={note.title}
              body={note.body}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
};
