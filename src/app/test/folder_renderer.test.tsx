import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FolderRenderer from "../components/folder_renderer";

describe("Folder renderer", () => {
  const folderprops = {
    id: "5",
    name: "Documents",
    type: "folder",
    dateAdded: "2024-02-05",
  };

  test("renders folder with it's details without files", () => {
    render(<FolderRenderer folderData={folderprops} />);

    const row = screen.getByRole("row");
    expect(row).toBeInTheDocument();
    const cells = row.querySelectorAll("td");
    
    const arrowImg = screen.queryByRole('img');
    expect(arrowImg).toBeNull();
    expect(cells[0]).toHaveTextContent("5");
    expect(cells[1]).toHaveTextContent("Documents");
    expect(cells[2]).toHaveTextContent("folder");
    expect(cells[3]).toHaveTextContent("2024-02-05");
  });

  const folderpropsWithFiles = {
    id: "5",
    name: "Documents",
    type: "folder",
    dateAdded: "2024-02-05",
    contents:[
        {
            id: "31",
            name: "test.doc",
            type: "Microsoft Word Document",
            size: "2MB",
            dateAdded: "2024-01-08",
            folderId: "3"
        },
        {
            id: "32",
            name: "users.xlsx",
            type: "Microsoft Excel Worksheet",
            size: "2MB",
            dateAdded: "2024-01-08",
            folderId: "3"
        },
    ]
  };

  test("renders folder with it's content", () => {
    render(<FolderRenderer folderData={folderpropsWithFiles} />);

    const row = screen.getByTestId("5");
    const arrowImg = screen.queryByRole('img');
    expect(arrowImg).toBeInTheDocument();

    fireEvent.click(row);

    folderpropsWithFiles.contents.forEach((item)=>{
      const row = screen.queryByText(item.name);
      expect(row).toBeInTheDocument();
    })

    fireEvent.click(row);
    folderpropsWithFiles.contents.forEach((item)=>{
      const row = screen.queryByText(item.name);
      expect(row).toBeNull();
    })
  });

});