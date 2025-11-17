/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
    const updateTodoCompleted = async (todo: any) => {
    const updatedTodos = todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: any) => {
    try {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: any) => {
    try{
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
      <h4>
        Todos 
        <FaPlusCircle 
          onClick={postNewTodo} 
          className="text-primary float-end fs-3" 
          style={{ cursor: 'pointer' }}
          title="Create new todo (POST)"
          id="wd-post-todo"
        />
        <FaPlusCircle 
          onClick={createNewTodo} 
          className="text-success float-end fs-3 me-2" 
          style={{ cursor: 'pointer' }}
          title="Create new todo (GET)"
        />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id} className="d-flex align-items-center">
            <input 
              type="checkbox" 
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={() => updateTodoCompleted(todo)}
            />
            
            {!todo.editing ? (
              <span 
                className="flex-grow-1"
                style={{ 
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: 'default'
                }}
              >
                {todo.title}
              </span>
            ) : (
              <FormControl 
                className="flex-grow-1 me-2"
                defaultValue={todo.title}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                  if (e.key === "Escape") {
                    setTodos(todos.map((t) => 
                      t.id === todo.id ? { ...t, editing: false } : t
                    ));
                  }
                }}
                onChange={(e) => {
                  const updatedTodos = todos.map((t) => 
                    t.id === todo.id ? { ...t, title: e.target.value } : t
                  );
                  setTodos(updatedTodos);
                }}
                onBlur={() => {
                  updateTodo({ ...todo, editing: false });
                }}
              />
            )}
            
            <div className="ms-auto d-flex align-items-center">
              <FaPencil 
                onClick={() => editTodo(todo)} 
                className="text-primary me-2" 
                style={{ cursor: 'pointer', fontSize: '1rem' }}
                title="Edit todo"
              />
              <FaTrash 
                onClick={() => removeTodo(todo)}
                className="text-danger me-2" 
                style={{ cursor: 'pointer', fontSize: '1rem' }}
                title="Remove todo (GET)"
                id="wd-remove-todo"
              />
              <TiDelete 
                onClick={() => deleteTodo(todo)} 
                className="text-danger" 
                style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                title="Delete todo (DELETE)"
                id="wd-delete-todo"
              />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}