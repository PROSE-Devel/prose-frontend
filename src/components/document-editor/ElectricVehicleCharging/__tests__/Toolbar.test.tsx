/**
 * This code was generated by Builder.io
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Toolbar from "../Toolbar";

describe("Toolbar", () => {
  it("renders without crashing", () => {
    render(<Toolbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("contains font size controls", () => {
    render(<Toolbar />);
    expect(
      screen.getByRole("button", { name: /Decrease font size/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Increase font size/i })
    ).toBeInTheDocument();
    expect(screen.getByText("16")).toBeInTheDocument();
  });

  it("displays the correct font name", () => {
    render(<Toolbar />);
    expect(screen.getByText("Montserrat")).toBeInTheDocument();
  });

  it("displays the correct text style", () => {
    render(<Toolbar />);
    expect(screen.getByText("Paragraph text")).toBeInTheDocument();
  });
});
