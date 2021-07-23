import React from "react";
import { render } from "@testing-library/react";
import UserLoginForm from "./UserLoginForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserLoginForm />
        </MemoryRouter>
    );
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserLoginForm />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});