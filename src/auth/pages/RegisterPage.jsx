import { Link as RouterLink } from "react-router-dom";

import { Alert, Button, Grid2, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

import { useDispatch, useSelector } from "react-redux";
import { startCreateUserWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

const formData = {
  name: "name",
  email: "email@email.com",
  password: "password",
};
const formValidations = {
  email: [(value) => value.includes("@"), "Debe de tener una  @"],
  password: [(value) => value.length >= 6, "Debe de tener 7 caracteres o mas"],
  name: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAutentication = useMemo(() => status === "cheking", [status]);

  const {
    formState,
    name,
    email,
    password,
    nameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    dispatch(startCreateUserWithEmailPassword(formState));
  };
  return (
    <AuthLayout title="Register">
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
              label="User"
              type="text"
              placeholder="User Name"
              name="name"
              error={!!nameValid}
              helperText={nameValid}
              fullWidth
              value={name}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 20 }}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Email"
              type="email"
              name="email"
              error={!!emailValid}
              helperText={emailValid}
              value={email}
              placeholder="email@email.com"
              onChange={onInputChange}
              fullWidth
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 20 }}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Password"
              type="password"
              error={!!passwordValid}
              helperText={passwordValid}
              name="password"
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
            <Grid2 size={{ xs: 12, sm: 12 }}>
              <Button
                disabled={isCheckingAutentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Registrar
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          direction="row"
          justifyContent="flex-end"
        >
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login"
          >
            Ya tienes una cuenta?
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
