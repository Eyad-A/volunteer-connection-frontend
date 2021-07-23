import React from "react";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfileForm";
import { UserProvider } from "../testData";

it("matches snapshot", function () {
  const { asFragment } = render(
      <UserProvider>
        <UserProfile />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});