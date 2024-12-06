const { render } = require("@testing-library/react");
import { LoginPage } from "../../../src/auth/pages/LoginPage";
describe("Prueba en <Login Page>", () => {
  test("debe de mostrar el componente correcta mente ", () => {
    render(<LoginPage />);
  });
});
