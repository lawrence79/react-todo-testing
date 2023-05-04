import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToDo from "./ToDo";

const mockTodo = {
    id: 1,
    task: "Sample Task",
    isCompleted: false,
};
const mockHandleToggle = jest.fn();
const mockHandleDelete = jest.fn();

describe("ToDo component", () => {
    test("renders todo item", () => {
        render(<ToDo todo={mockTodo} handleToggle={mockHandleToggle} handleDelete={mockHandleDelete} />);
        expect(screen.getByText("Sample Task")).toBeInTheDocument();
    });

    test("toggles completed status", () => {
        render(<ToDo todo={mockTodo} handleToggle={mockHandleToggle} handleDelete={mockHandleDelete} />);
        const checkboxElement = screen.getByRole("checkbox");
        fireEvent.click(checkboxElement);
        expect(mockHandleToggle).toHaveBeenCalledWith(mockTodo.id);
    });

    test("deletes todo item", () => {
        render(<ToDo todo={mockTodo} handleToggle={mockHandleToggle} handleDelete={mockHandleDelete} />);
        const deleteButton = screen.getByText("Delete");
        fireEvent.click(deleteButton);
        expect(mockHandleDelete).toHaveBeenCalledWith(mockTodo.id);
    });
});
