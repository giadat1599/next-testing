import { TodoItem } from "@/components/todo-item";
import { render, screen } from "@testing-library/react";

describe("testing todo item", () => {
  it("should render todo item with two actions", () => {
    render(
      <TodoItem
        todo={{ id: 1, name: "Todo 1", isCompleted: false }}
        setTodos={jest.fn}
      />
    );

    const todoActionDelete = screen.getByTestId("todo-actions-delete");
    const todoActionComplete = screen.getByTestId("todo-actions-complete");

    expect(todoActionDelete).toBeInTheDocument();
    expect(todoActionComplete).toBeInTheDocument();
  });

  it("should render todo item with completed todo", () => {
    render(
      <TodoItem
        todo={{ id: 1, name: "Todo 1", isCompleted: true }}
        setTodos={jest.fn}
      />
    );

    const todoName = screen.getByTestId("todo-name");

    expect(todoName).toHaveClass("line-through");
  });
});
