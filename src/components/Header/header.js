import React, { useState } from 'react';
import styles from './header.module.scss';
import Button from '../Buttons/button.js';
import Modal from '../Task/Modal/modal-task.js';

function Header({ addTodo }) {
  const [newTask, setNewTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTodo(newTask);
      setNewTask('');
      setIsModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Header}>
      <Button variant="primary" onClick={handleOpenModal}>
        Add Task
      </Button>

      <Modal show={isModalOpen} handleClose={handleCloseModal}>
        <h2 className={styles.modalTitle}>Add New Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add new task"
          className={styles.modalInput}
        />
        <button
          type="button"
          className={styles.modalButton}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </Modal>
    </div>
  );
}

export default Header;
