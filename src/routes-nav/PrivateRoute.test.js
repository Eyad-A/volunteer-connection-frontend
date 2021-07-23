import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testData";
import PrivateRoute from "./PrivateRoute";

it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <PrivateRoute />
          </UserProvider>
        </MemoryRouter>,
    );
  });
  
  it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <UserProvider>
            <PrivateRoute />
          </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });