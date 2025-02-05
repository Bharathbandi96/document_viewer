import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileRenderer from "../components/file_renderer";

describe("File renderer", () => {
  const fileProps = {
    id: "5",
    name: "Project.docx",
    type: "Microsoft Word Document",
    dateAdded: "2024-02-05",
  };

  test("renders the file with it's details", () => {
    render(<FileRenderer fileData={fileProps} />);

    const row = screen.getByRole("row");
    const cells = row.querySelectorAll("td");

    expect(cells).toHaveLength(4);
    expect(cells[0]).toHaveTextContent("5");
    expect(cells[1]).toHaveTextContent("Project.docx");
    expect(cells[2]).toHaveTextContent("Microsoft Word Document");
    expect(cells[3]).toHaveTextContent("2024-02-05");
  });

  const allFileProps = {
    id: "1",
    name: "Resume.pdf",
    type: "PDF Document",
    dateAdded: "2024-02-05",
    size: '150KB',
    folderId: ''
  };

  test("renders the file even though additional details are passed", () => {
    render(<FileRenderer fileData={allFileProps} />);

    const row = screen.getByRole("row");
    const cells = row.querySelectorAll("td");

    expect(cells).toHaveLength(4);
    expect(cells[0]).toHaveTextContent("1");
    expect(cells[1]).toHaveTextContent("Resume.pdf");
    expect(cells[2]).toHaveTextContent("PDF Document");
    expect(cells[3]).toHaveTextContent("2024-02-05");
  });
});
