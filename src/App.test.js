import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    test.skip("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Login Page")).toBeDefined();
    });

    test.only("displays all form inputs", () => {
        const { getByText } = render(<App />);

        expect(getByText("Username")).toBeDefined();
        expect(getByText("Password")).toBeDefined();
    });
    test("it has a disabled button until both fields have a value", () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId("login-button")).disabled.toBe(true);
    });
});