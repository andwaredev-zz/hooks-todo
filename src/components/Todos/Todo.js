import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { todoPropTypes } from "../../constants";
import TodoCheckBox from "./TodoCheckBox";
import styles from "./Todo.module.css";

const Todo = ({ label, isCompleted, onCheckBoxClick }) => (
  <li className={styles.todo} onClick={onCheckBoxClick}>
    <div className={classNames(styles["todo__content"], styles.content)}>
      <TodoCheckBox isCompleted={isCompleted} onClick={onCheckBoxClick} />
      <div className={styles["content__label"]}>
        {label}
      </div>
    </div>
  </li>
);

Todo.propTypes = {
  ...todoPropTypes,
  onCheckBoxClick: PropTypes.func.isRequired
};

export default Todo;
