import { Link as RouterLink } from "react-router-dom";
import { Google, } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid2 container>
          <Grid2 item size={{ xs: 12, md: 20 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
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
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="flex-end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
