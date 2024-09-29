import {
  authSlice,
  login,
  logaut,
  chekingCredentials,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demouser,
  initialState,
} from "../../fixtures/authFixture";

describe("Prueba en el authSlice", () => {
  test("Debe regresar el estado inicial y llamarse auth ", () => {
    expect(authSlice.name).toBe("auth");
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("should do the authentication ", () => {
    const state = authSlice.reducer(initialState, login(demouser));
    expect(state).toEqual({
      status: "authenticated", //"checking", //'not-authenticated','aythenticated'
      uid: demouser.uid,
      email: demouser.email,
      displayName: demouser.displayName,
      photoUrl: demouser.photoUrl,
      errorMessage: null,
    });
  });

  test("Debe realizarel logout", () => {
    const state = authSlice.reducer(authenticatedState, logaut(demouser));

    expect(state).toEqual({
      status: "not-authenticated", //"checking", //'not-authenticated','aythenticated'
      uid: null,
      email: null,
      displayName: null,
      photoUrl: null,
      errorMessage: null,
    });
  });

  test("Debe realizarel logout y mostrar el mensaje de error ", () => {
    const errorMessage = "credenciales no correctas";
    const state = authSlice.reducer(
      authenticatedState,
      logaut((demouser.errorMessage = { errorMessage }))
    );
    expect(state).toEqual({
      status: "not-authenticated", //"checking", //'not-authenticated','aythenticated'
      uid: null,
      email: null,
      displayName: null,
      photoUrl: null,
      errorMessage: "credenciales no correctas",
    });
  });

  test("should change the state to checking", () => {
    const state = authSlice.reducer(authenticatedState, chekingCredentials());
    expect(state.status).toBe("checking");
  });
});
