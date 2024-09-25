import { TurnedInNot } from "@mui/icons-material";
import {
  Card,
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal";
import { useDispatch } from "react-redux";

interface SBIProp {
  title: string;
  body: string;
  id: string;
  date: number;
  imageUrls: string[];
}

export const SideBarItem = ({ title, body, id, date, imageUrls }: SBIProp) => {
  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  const newBody = useMemo(() => {
    return body.length > 25 ? body.substring(0, 25) + "..." : body;
  }, [body]);

  return (
    <Card sx={{ margin: 1, backgroundColor: "#FFA438" }}>
      <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
          <ListItemIcon>
            <TurnedInNot />
            <Grid2
              color="ActiveBorder"
              container
              direction="column"
            >
              <ListItemText primary={newTitle} />
              <ListItemText secondary={newBody} />
            </Grid2>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Card>
  );
};
