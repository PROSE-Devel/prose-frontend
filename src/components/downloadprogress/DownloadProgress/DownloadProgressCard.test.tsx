/**
 * This code was generated by Builder.io
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DownloadProgressCard from "./DownloadProgressCard";

describe("DownloadProgressCard", () => {
  const mockDownloads = [
    {
      title: "DOCX - The future of electric vehicle",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/94d3408fdc0e0ed35a4fde8c80f3fd86b627b5354ad898b9416f3096e81ad311?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
      progress: 75,
      status: "Downloading",
    },
  ];

  it("renders the card title", () => {
    render(
      <DownloadProgressCard
        title="Downloads in progress"
        downloads={mockDownloads}
      />
    );
    expect(screen.getByText("Downloads in progress")).toBeInTheDocument();
  });

  it("renders download items", () => {
    render(
      <DownloadProgressCard
        title="Downloads in progress"
        downloads={mockDownloads}
      />
    );
    expect(
      screen.getByText("DOCX - The future of electric vehicle")
    ).toBeInTheDocument();
    expect(screen.getByText("Downloading")).toBeInTheDocument();
  });

  it("renders the correct number of download items", () => {
    render(
      <DownloadProgressCard
        title="Downloads in progress"
        downloads={mockDownloads}
      />
    );
    const downloadItems = screen.getAllByRole("listitem");
    expect(downloadItems).toHaveLength(mockDownloads.length);
  });
});
