import Header from './components/Header/header.js';
import Title from './components/Title/title.js';
import Task from './components/Task/task.js';
import './App.css';

// Lista estática de tareas
const todos = [
  {
    id: 1,
    title: 'Comprar comestibles',
    status: 'incomplete',
    time: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Hacer ejercicio',
    status: 'complete',
    time: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Leer un libro',
    status: 'incomplete',
    time: new Date().toISOString(),
  },
];

function App() {
  return (
    <>
      <Title>Lista Tareas</Title>
      <Header />
      <div>
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default App;
