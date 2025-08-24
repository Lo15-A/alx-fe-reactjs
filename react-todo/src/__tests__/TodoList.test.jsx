// To run tests, install the following dev dependencies:
// npm install --save-dev jest @testing-library/react @testing-library/jest-dom

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TodoList from '../components/TodoList';

// Initial render test
test("renders initial todos", () => {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ];

  render(<TodoList initialTodos={initialTodos} />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Add todo test
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  const addButton = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// Toggle todo test
test("toggles todo completion", () => {
  const initialTodos = [{ id: 1, text: "Learn React", completed: false }];
  render(<TodoList initialTodos={initialTodos} />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

// Delete todo test
test("deletes a todo", () => {
  const initialTodos = [{ id: 1, text: "Learn React", completed: false }];
  render(<TodoList initialTodos={initialTodos} />);
  const deleteButton = screen.getByTestId("delete-btn");
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
