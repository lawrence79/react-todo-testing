// generated with gpt-4

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

describe("App component", () => {
    test("renders App component", () => {
        render(<App />);
        expect(screen.getByText("To Do List")).toBeInTheDocument();
    });

    test("loads and displays initial todo tasks", () => {
        render(<App />);
        data.forEach((task) => {
            expect(screen.getByText(task.task)).toBeInTheDocument();
        });
    });

    test("filters out completed tasks", () => {
        render(<App />);
        const button = screen.getByText("Clear Completed");
        fireEvent.click(button);
        data.forEach((task) => {
            if (task.complete) {
                expect(screen.queryByText(task.task)).not.toBeInTheDocument();
            } else {
                expect(screen.getByText(task.task)).toBeInTheDocument();
            }
        });
    });

    test("adds new task to list", () => {
        render(<App />);

        const input = screen.getByPlaceholderText("Enter task...");
        const button = screen.getByText("Submit");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(button);

        expect(screen.getByText("New Task")).toBeInTheDocument();
    });

    test("toggles task completion", () => {
        render(<App />);

        const task = data[0];
        const taskElement = screen.getByText(task.task);
        fireEvent.click(taskElement);
        expect(screen.getByText(task.task)).toHaveClass("strike");
    });
});
