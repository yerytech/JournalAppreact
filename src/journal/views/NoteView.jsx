import { DeleteOutline, SaveOutlined, Upload } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { active, messageSaved, isSaving } = useSelector(
    // @ts-ignore
    (state) => state.journal
  );
  // @ts-ignore
  // @ts-ignore
  const { body, title, onInputChange, date, formState } = useForm(active);
  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    // @ts-ignore
    dispatch(startUploadingFiles(target.files));
  };
  const fileInputRef = useRef();

  const onDelete = () => {
    // @ts-ignore
    dispatch(startDeletingNote());
  };
  return (
    <Grid2
      className="animate__fadeIn"
      container
      alignItems="center"
      sx={{
        width: { sm: "flex" },
        direction: "row",
        justifyContent: "space-between",

        mb: 1,
      }}
    >
      <Grid2>
        <Typography
          fontSize={39}
          fontWeight="light"
        >
          {dateString}
        </Typography>
      </Grid2>
      <Grid2>
        <input
          ref={fileInputRef}
          style={{
            display: "none",
          }}
          multiple
          type="file"
          onChange={onFileInputChange}
        />

        <Button
          disabled={isSaving}
          // @ts-ignore
          onClick={() => fileInputRef.current.click()}
          color="primary"
          sx={{ padding: 2 }}
        >
          <Upload sx={{ fontSize: 30, mr: 1 }} />
        </Button>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2
        container
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>
      <Grid2
        container
        sx={{ justifyContent: "end", mt: 2 }}
      >
        <Button
          onClick={onDelete}
          color="error"
        >
          <DeleteOutline /> Borrar
        </Button>
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
