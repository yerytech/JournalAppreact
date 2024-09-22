import { StarRateOutlined } from "@mui/icons-material";
import { Grid, Grid2, Typography } from "@mui/material";

export const NotingSelectedView = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      sx={{
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid2 size={{ xs: 12 }}>
        <StarRateOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <Typography
          color="white"
          variant="h5"
        >
          Selecciona o crea una nota
        </Typography>
      </Grid2>
    </Grid>
  );
};
