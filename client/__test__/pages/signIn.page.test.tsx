// =========================== axios ================================
import axios from "axios";

// =========================== component ================================
import SignInPage from "@/pages/sign-in";

// =========================== react ===================================
import { render } from "@testing-library/react";

// =========================== router ===================================
import { MemoryRouter } from "react-router-dom";

// =========================== store ===================================
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

// =========================== mocks ====================================
import { initialState } from "../mocks/auth.data.mock";

import { NextRouter } from 'next/router';

// Mock the useRouter module
import * as nextRouter from 'next/router';

// Create a spy for the useRouter method
const useRouterSpy = jest.spyOn(nextRouter, 'useRouter');

// Mock the useRouter module
// jest.mock('next/router');


// =========================== mock store ===================================
const mockStore = configureStore([thunk]);


describe("Sign In Page", () => {
  let store: any;

  // =========================== mock router ===================================
  const mockedRouter: NextRouter = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: async () => {},
    beforePopState: () => {},
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    basePath: '',
    isLocaleDomain: false,
    isFallback: false,
    isReady: true,
    isPreview: false,
    forward: jest.fn(),
  };
  useRouterSpy.mockReturnValue(mockedRouter);

  it("should render the signUp form", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignInPage />
        </MemoryRouter>
      </Provider>
    );
  });
});