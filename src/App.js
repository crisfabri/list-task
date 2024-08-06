import React, { useEffect, useState } from 'react';
import './App.css'; // Importa el archivo CSS global
import Header from './components/Header/header.js';
import Title from './components/Title/title.js';
import Task from './components/Task/task.js';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      status: 'incomplete',
      time: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'complete' ? 'incomplete' : 'complete',
            }
          : todo
      )
    );
  };

  return (
    <>
      <Title>Lista Tareas</Title>
      <Header addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default App;
