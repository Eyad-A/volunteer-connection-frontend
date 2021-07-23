import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard
                companyHandle="test"
                companyName="test company"
                state="Flordia"
                numEmployees='999'
                shortDescription="test"
                longDescription="test test"
                logoUrl="https://google.com"
                lookingFor="Designer"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});