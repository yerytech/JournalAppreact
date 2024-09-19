import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import {
  logoutFirebase,
  registerWithEmailPassword,
  singInEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { chekingCredentials, logaut, login } from "./authSlice";

export const checkingAutentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = signInWithEmailAndPassword(email, password);
    console.log(result);
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logaut(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreateUserWithEmailPassword = ({ name, password, email }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword(
      {
        name,
        password,
        email,
      }
    );
    if (!ok) return dispatch(logaut({ errorMessage }));
    dispatch(login({ uid, name, email, photoURL }));
  };
};

export const startLoginEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await singInEmailPassword({ email, password });
    console.log(result);

    if (!result.ok) return dispatch(logaut(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logaut({}));
  };
};