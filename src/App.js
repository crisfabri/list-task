import React, { useEffect, useState } from 'react';
import './App.css'; // Importa el archivo CSS global
import Header from './components/Header/header.js';
import Title from './components/Title/title.js';
import TaskList from './components/TaskList/taskList.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Función para cargar tareas desde localStorage
  const loadTodos = () => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      return storedTodos || [];
    } catch (error) {
      console.error('Error cargando tareas desde localStorage:', error);
      return [];
    }
  };

  // Cargar tareas desde localStorage una vez
  useEffect(() => {
    const storedTodos = loadTodos();
    console.log('Cargando tareas desde localStorage:', storedTodos);
    setTodos(storedTodos);
    setIsInitialLoad(false);
  }, []);

  // Guardar tareas en localStorage cada vez que cambian, excepto en la carga inicial
  useEffect(() => {
    if (!isInitialLoad) {
      console.log('Guardando tareas en localStorage:', todos);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isInitialLoad]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      status: 'incomplete',
      time: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
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
      <TaskList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
      />
    </>
  );
};

export default App;
