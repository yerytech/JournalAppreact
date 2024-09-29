import { Link as RouterLink } from "react-router-dom";
import { Google, } from "@mui/icons-material";
import {
  Button,
  Grid2,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAutentication,
  startGoogleSingIn,
  startLoginEmailPassword,
} from "../../store/auth";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  // @ts-ignore
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // @ts-ignore

  // @ts-ignore
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const onSubmit = (e) => {
    e.preventDefault();

    // @ts-ignore
    dispatch(checkingAutentication());
  };
  const onGoogleSingIn = () => {
    console.log("Google singin");
    // @ts-ignore
    dispatch(startGoogleSingIn());
  };
  const onEmailPasswordSingIn = () => {
    // @ts-ignore
    dispatch(startLoginEmailPassword({ email, password }));
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__bounceIn"
      >
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
            <Grid2
              display={errorMessage ? "" : "none"}
              size={{ xs: 12, sm: 12 }}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                onClick={onEmailPasswordSingIn}
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
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
