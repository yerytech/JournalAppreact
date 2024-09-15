import { Link as RouterLink } from "react-router-dom";
import { Google, } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAutentication, startGoogleSingIn } from "../../store/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "yery@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
    dispatch(checkingAutentication());
  };
  const onGoogleSingIn = () => {
    console.log("Google singin");
    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 20 }}
            sx={{ mt: 2 }}
          >
            <TextField
              name="email"
              label="Correo"
              type="email"
              placeholder="email@email.com"
              fullWidth
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 20 }}
            sx={{ mt: 2 }}
          >
            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={onInputChange}
              placeholder="Password"
              fullWidth
            />
          </Grid2>
          <Grid2
            container
            spacing={1}
            sx={{ mb: 1, mt: 1 }}
            size={{ xs: 12 }}
          >
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                onClick={onGoogleSingIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          justifyContent="flex-end"
        >
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/register"
          >
            Crear cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
