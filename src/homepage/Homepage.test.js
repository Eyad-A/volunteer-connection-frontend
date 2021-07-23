import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Homepage";
import { UserProvider } from "../testData";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Home />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});