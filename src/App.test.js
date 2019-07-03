import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    test.skip("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Login Page")).toBeDefined();
    });

    test.skip("displays all form inputs", () => {
        const { getByText } = render(<App />);

        expect(getByText("Username")).toBeDefined();
        expect(getByText("Password")).toBeDefined();
    });
   
});



