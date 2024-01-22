import { cn } from "@/lib/utils";
import { Todo } from "./todo-card-form";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Check, Trash } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const onComplete = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === todo.id) {
          prevTodo.isCompleted = !prevTodo.isCompleted;
        }

        return prevTodo;
      });
    });
  };

  const onDelete = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
    });
  };

  return (
    <div className="border p-2 rounded-sm flex items-center justify-between">
      <span
        className={cn("text-sm", todo.isCompleted && "line-through")}
        data-testid="todo-name"
      >
        {todo.name}
      </span>
      <div>
        <Button
          size="icon"
          variant="ghost"
          onClick={onDelete}
          data-testid="todo-actions-delete"
        >
          <Trash className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onComplete}
          data-testid="todo-actions-complete"
        >
          <Check className="size-5" />
        </Button>
      </div>
    </div>
  );
};
