import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from './task.module.scss';
import CheckButton from '../Buttons/checkButton';

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

  const handleUpdate = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
    toast.success('Todo Updated Successfully');
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <motion.div className={styles.item} variants={child}>
      <div className={styles.taskDetails}>
        <CheckButton checked={checked} handleCheck={handleCheck} />
        <div className={styles.texts}>
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={handleEditChange}
              onBlur={handleUpdate}
            />
          ) : (
            <button
              type="button" // Especificamos el tipo de botón
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
              onClick={handleEditClick}
            >
              {todo.title}
            </button>
          )}
          <p className={styles.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p>
        </div>
      </div>
      <div className={styles.taskActions}>
        <MdDelete onClick={handleDelete} role="button" tabIndex={0} />
        <MdEdit onClick={handleEditClick} role="button" tabIndex={0} />
      </div>
    </motion.div>
  );
}

export default Task;
