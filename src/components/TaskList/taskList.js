import React from 'react';
import Task from '../Task/task.js';

const TaskList = ({ todos, deleteTodo, updateTodo, toggleComplete }) => (
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
);

export default TaskList;
