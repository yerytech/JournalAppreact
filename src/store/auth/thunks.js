import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { singInWithGoogle } from "../../firebase/providers";
import { chekingCredentials } from "./authSlice";

export const checkingAutentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = signInWithEmailAndPassword(email, password);
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await singInWithGoogle();
    console.log(result);
  };
};
