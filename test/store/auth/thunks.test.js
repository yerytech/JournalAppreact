import {
  logoutFirebase,
  singInEmailPassword,
  singInWithGoogle,
} from "../../../src/firebase/providers";
import {
  chekingCredentials,
  logaut,
  login,
} from "../../../src/store/auth/authSlice";
import {
  checkingAutentication,
  startGoogleSingIn,
  startLoginEmailPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNoteLogout } from "../../../src/store/journal";
import { demouser } from "../../fixtures/authFixture";
jest.mock("../../../src/firebase/providers");
describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should ivoke  the checkingCredentials", async () => {
    const valor = chekingCredentials();
    await checkingAutentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(valor);
  });

  test("startgogole singin debe de llamar login y checkingcredential", async () => {
    const loginData = { ok: true, ...demouser };
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSingIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startgogole singin debe de llamar logaut y un mensaje de error ", async () => {
    const loginData = { ok: false, errorMessage: "Error de google " };
    await singInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSingIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logaut(loginData.errorMessage));
  });

  test("startLoginEmailPassword debe de llamar checkingCredentials y login-exito ", async () => {
    const loginData = { ok: true, ...demouser };
    const formData = { email: demouser.email, password: "123456" };

    await singInEmailPassword.mockResolvedValue(loginData);
    await startLoginEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogaut debe de llamar logaotfirebase, clearnote y logaut ", async () => {
    await startLogout()(dispatch);
    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNoteLogout());
    expect(dispatch).toHaveBeenCalledWith(logaut());
  });
});
