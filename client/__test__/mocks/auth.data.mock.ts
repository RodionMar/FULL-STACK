// ========================== form log in input ==========================
export const formLogInInput = {
  email: "test@test.test",
  password: "12345678"
}

// ========================== initial state ==========================
const initialState = {
  auth: {
    token: "",
    errors: {
      token: null
    },
    pending: {
      token: false
    }
  }
}