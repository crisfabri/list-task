import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './header.module.scss';
import Button, { SelectButton } from '../Button/button.js';

function Header() {
  return (
    <div className={styles.Header}>
      <Button variant="primary">Add Task</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
    </div>
  );
}

export default Header;
