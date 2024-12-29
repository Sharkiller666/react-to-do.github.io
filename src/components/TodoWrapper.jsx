import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      content: "apply jobs",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "revise resume",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing= (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isEditing: !todo.isEditing }
          : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map((todo) => {
        return todo.id === id ? {...todo, content: newContent, isEditing: false} : todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>My Lists:</h1>
      <CreateForm addTodo={addTodo}></CreateForm>
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoWrapper;