import { Grid2, Typography } from "@mui/material";
import PropTypes from "prop-types";
export const AuthLayout = ({ children, title }) => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        xs={3}
        sx={{
          width: { md: 460 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
        {children}
      </Grid2>
    </Grid2>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};
