import React from "react";
import { render } from "@testing-library/react";
import CompanyLoginForm from "./CompanyLoginForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <CompanyLoginForm />
        </MemoryRouter>
    );
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyLoginForm />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});