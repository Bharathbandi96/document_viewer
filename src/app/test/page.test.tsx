import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Main page renderer", () => {
    render(<Home />)
    test("Renders home page with default content.", () => {
        const title = screen.queryByText('Document Viewer')
        expect(title).toBeInTheDocument();

        const searchEle = screen.getByPlaceholderText('Filter By File Name...');
        expect(searchEle).toBeInTheDocument();

        expect(screen.getByText('Type')).toBeInTheDocument();

        const sortImage = screen.getByAltText("Sort Icon");
        expect(sortImage).toHaveClass("-rotate-90");

        fireEvent.click(sortImage)
        expect(sortImage).toHaveClass("rotate-90");

        expect(screen.getByText('Others')).toBeInTheDocument();

        fireEvent.change(searchEle, { target: { value: 'Resu' } });
        expect(screen.getByText('Resume.pdf')).toBeInTheDocument();
    });

});