import { Link as RouterLink } from "react-router-dom";

import { Button, Grid2, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 item size={{ xs: 12, md: 20 }} sx={{ mt: 2 }}>
            <TextField
              label="User"
              type="text"
              placeholder="User Name"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 20 }} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 20 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid2>
          <Grid2 container spacing={1} sx={{ mb: 1, mt: 1 }} size={{ xs: 12 }}>
            <Grid2 item size={{ xs: 12, sm: 12 }}>
              <Button variant="contained" fullWidth>
                Registrar
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="flex-end">
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Ya tienes una cuenta?
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
