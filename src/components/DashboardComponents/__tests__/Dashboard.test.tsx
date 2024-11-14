/**
 * This code was generated by Builder.io
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
    expect(screen.getByText("PROSE")).toBeInTheDocument();
  });

  it("contains main content sections", () => {
    render(<Dashboard />);
    expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
    expect(screen.getByRole("navigation")).toBeInTheDocument(); // Sidebar
    expect(screen.getByRole("main")).toBeInTheDocument(); // MainContent
    expect(screen.getByRole("complementary")).toBeInTheDocument(); // RightSidebar
  });
});