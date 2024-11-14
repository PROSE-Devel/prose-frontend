/**
 * This code was generated by Builder.io
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
    expect(screen.getByText("PROSE")).toBeInTheDocument();
  });

  it("displays the correct navigation items", () => {
    render(<Dashboard />);
    expect(screen.getByText("Generate")).toBeInTheDocument();
    expect(screen.getByText("Analyze")).toBeInTheDocument();
    expect(screen.getByText("Workspace")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("shows the content generation options", () => {
    render(<Dashboard />);
    expect(screen.getByText("Document")).toBeInTheDocument();
    expect(screen.getByText("Presentation")).toBeInTheDocument();
    expect(screen.getByText("Video Generation")).toBeInTheDocument();
  });

  it("displays the generation buttons", () => {
    render(<Dashboard />);
    expect(screen.getByText("Generate")).toBeInTheDocument();
    expect(screen.getByText("Quick Generate")).toBeInTheDocument();
  });

  it("shows the generation area with placeholder text", () => {
    render(<Dashboard />);
    expect(
      screen.getByText(/Generations will appear here/)
    ).toBeInTheDocument();
  });
});
