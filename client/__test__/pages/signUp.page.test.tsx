// =========================== component ================================
import SignUpPage from "@/pages/sign-up";

// =========================== react ===================================
import { render } from '@testing-library/react';

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

// =========================== mock store ===================================
const mockStore = configureStore([thunk]);


describe("Sign Up Page", () => {
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

  it("should render sign up page", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpPage />
        </MemoryRouter>
      </Provider>
    );
  });
})