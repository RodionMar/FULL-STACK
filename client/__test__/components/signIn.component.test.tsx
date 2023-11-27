/* eslint-disable testing-library/no-unnecessary-act */
// =========================== component ===============================
import SignIn from "@/components/SignIn";

// =========================== react testing library ===========================
import "@testing-library/jest-dom";
import {
  render,
  waitFor,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";


describe("Sign In component", () => {
  const SubmitHandler = jest.fn().mockResolvedValueOnce(1);
  const handleSignIn = jest.fn().mockResolvedValueOnce(1);
  const handleRedirectToSignUp = jest.fn().mockRejectedValueOnce(1);

  it("should be rendered", async () => {
    render(
      <SignIn
        handleSignIn={handleSignIn}
        handleRedirectToSignUp={handleRedirectToSignUp}
        fetchErrors={null}
      />
    );
    // =============== The act of clicking a button ===============
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /Sign In/i })));
    await waitFor(() => expect(SubmitHandler).toBeDefined());
  });

  it("should have a submit button", async () => {
    render(
      <SignIn 
        handleSignIn={handleSignIn}
        handleRedirectToSignUp={handleRedirectToSignUp}
        fetchErrors={null}
      />
    );
    // =============== The act of clicking a button ===============
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /Sign In/i })));
    expect(await screen.findByRole("button", { name: /Sign in/i }));
  })

  it("should show an error", async () => {
    render(
      <SignIn 
        handleSignIn={handleSignIn}
        handleRedirectToSignUp={handleRedirectToSignUp}
        fetchErrors={"Error! This is test error:D"}
      />
    );
    expect(screen.getByText("Error! This is test error:D")).toBeInTheDocument();
    expect(screen.getByTestId("error-stub")).toBeInTheDocument()
  })

  it("should have a submit button is enable", async () => {
    render(
      <SignIn 
        handleSignIn={handleSignIn}
        handleRedirectToSignUp={handleRedirectToSignUp}
        fetchErrors={null}
      />
    );
    const emailInput = screen.getByTestId("email-stub");
    const passwordInput = screen.getByTestId("password-stub");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(passwordInput, { target: { value: "12341234" } });
    });
  
    await waitFor(() => {
      expect(screen.getByTestId("signin-button")).toBeEnabled();
    });
  })
})