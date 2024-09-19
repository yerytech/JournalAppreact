import { CircularProgress, Grid2 } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        sx={{
          width: { md: 60 },
        }}
      >
        <CircularProgress color="warning" />
      </Grid2>
    </Grid2>
  );
};
