import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import {
  logoutFirebase,
  registerWithEmailPassword,
  singInEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { chekingCredentials, logaut, login } from "./authSlice";
import { clearNoteLogout } from "../journal";

export const checkingAutentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    // @ts-ignore
    // const result = signInWithEmailAndPassword(email, password);
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

    if (!result.ok) return dispatch(logaut(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNoteLogout());
    dispatch(logaut());
  };
};