"use client";

import { TodoItem } from "./todo-item";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export const TodoCardForm = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setTodos((prevState) => [
        ...prevState,
        { id: new Date().getTime(), name: name, isCompleted: false },
      ]);
      setName("");
    }
  };
  console.log(todos);
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <Input
          data-testid="todo-input"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </CardHeader>
      <CardContent className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </CardContent>
    </Card>
  );
};
