import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { todo } from "node:test";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}
) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div>
      <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </Button>
      <Button className="bg-success ms-2" onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </Button></div>
    </ListGroupItem>);}