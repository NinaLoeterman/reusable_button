import { render, getByText, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button.jsx";

describe("Button", () => {
  test("should display title", () => {
    const { container } = render(<Button title="click me" />);
    getByText(container, "click me");
  });
});
