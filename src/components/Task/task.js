import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from './task.module.scss';
import CheckButton from '../Buttons/checkButton';
import Modal from './Modal/modal-task.js';

export const getClasses = (classes) => classes.filter(Boolean).join(' ').trim();

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Task({ todo, deleteTodo, updateTodo, toggleComplete }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  useEffect(() => {
    setChecked(todo.status === 'complete');
  }, [todo.status]);

  const handleCheck = () => {
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.success('Todo Deleted Successfully');
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
    toast.success('Todo Updated Successfully');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.taskDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <label
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </label>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.taskActions}>
          <MdDelete onClick={handleDelete} className={styles.icon} />
          <MdEdit onClick={handleEditClick} className={styles.icon} />
        </div>
      </motion.div>

      <Modal show={isEditing} handleClose={handleCloseModal}>
        <h2 className={styles.modalTitle}>Edit Task</h2>
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          className={styles.modalInput}
        />
        <button
          type="button"
          className={styles.modalButton}
          onClick={handleUpdate}
        >
          Update Task
        </button>
      </Modal>
    </>
  );
}

export default Task;
