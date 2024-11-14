/**
 * This code was generated by Builder.io
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../Header";

describe("Header", () => {
  it("renders the PROSE title", () => {
    render(<Header />);
    expect(screen.getByText("PROSE")).toBeInTheDocument();
  });

  it("displays the current page", () => {
    render(<Header />);
    expect(screen.getByText("AI Generate")).toBeInTheDocument();
  });

  it("shows the upgrade button", () => {
    render(<Header />);
    expect(screen.getByText("UPGRADE NOW")).toBeInTheDocument();
  });

  it("displays the user name", () => {
    render(<Header />);
    expect(screen.getByText("Pooja P")).toBeInTheDocument();
  });
});