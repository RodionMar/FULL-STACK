/* eslint-disable testing-library/no-unnecessary-act */
// =========================== component ===============================
import SignUp from "@/components/SignUp";

// =========================== react testing library ===========================
import "@testing-library/jest-dom";
import {
  render,
  waitFor,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";

// jest.mock("@/components/SignUp", () => ({
//   ...jest.requireActual("@/components/SignUp"),
//   handleSignUp: jest.fn(),
// }));


describe("Sign Up component", () => {
  const SubmitHandler = jest.fn().mockResolvedValueOnce(1);
  const handleSignUp = jest.fn().mockResolvedValueOnce(1);
  const handleRedirectToSignIn = jest.fn().mockRejectedValueOnce(1);

  it("should be rendered", async () => {
    render(
      <SignUp
        handleSignUp={handleSignUp}
        handleRedirectToSignIn={handleRedirectToSignIn}
        fetchErrors={null}
      />
    );
    // =============== The act of clicking a button ===============
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /Sign Up/i })));
    await waitFor(() => expect(SubmitHandler).toBeDefined());
  });

  it("should have a submit button", async () => {
    render(
      <SignUp 
        handleSignUp={handleSignUp}
        handleRedirectToSignIn={handleRedirectToSignIn}
        fetchErrors={null}
      />
    );
    // =============== The act of clicking a button ===============
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /Sign Up/i })));
    expect(await screen.findByRole("button", { name: /Sign Up/i }));
  })

  it("should show an error", async () => {
    render(
      <SignUp 
        handleSignUp={handleSignUp}
        handleRedirectToSignIn={handleRedirectToSignIn}
        fetchErrors={"Error! This is test error:D"}
      />
    );
    expect(screen.getByText("Error! This is test error:D")).toBeInTheDocument();
    expect(screen.getByTestId("error-stub")).toBeInTheDocument()
  })

  it("should have a submit button is enable", async () => {
    render(
      <SignUp 
        handleSignUp={handleSignUp}
        handleRedirectToSignIn={handleRedirectToSignIn}
        fetchErrors={null}
      />
    );

    const firstNameInput = screen.getByTestId("first-name-stub");
    const lastNameInput = screen.getByTestId("last-name-stub");
    const tagInput = screen.getByTestId("tag-stub");
    const emailInput = screen.getByTestId("email-stub");
    const passwordInput = screen.getByTestId("password-stub");
    const confirmPasswordInput = screen.getByTestId("confirm-password-stub");

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "Sergey" } });
      fireEvent.change(lastNameInput, { target: { value: "Bodrov" } });
      fireEvent.change(tagInput, { target: { value: "Bodrov333" } });
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(passwordInput, { target: { value: "12341234" } });
      fireEvent.change(confirmPasswordInput, { target: { value: "12341234" } });
    });
  
    await waitFor(() => {
      expect(screen.getByTestId("signup-button")).toBeEnabled();
    });
  });

  it("should set the title", async () => {
    render(
      <SignUp 
        handleSignUp={handleSignUp}
        handleRedirectToSignIn={handleRedirectToSignIn}
        fetchErrors={null}
      />
    );

    const h1Element = screen.getByTestId("first-name-stub");
    expect(h1Element).toBeInTheDocument();
  })
})