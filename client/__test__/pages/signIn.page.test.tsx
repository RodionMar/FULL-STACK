// =========================== component ================================
import SignInPage from "@/pages/sign-in";

// =========================== react ===================================
import { render } from "@testing-library/react";

// =========================== router ===================================
import { MemoryRouter } from "react-router-dom";


describe("Sign In Page", () => {
  it("should render sign in page", () => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    )
  })
})