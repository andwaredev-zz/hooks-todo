import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./TodoCheckBox.module.css";

const TodoCheckBox = ({ isCompleted, onClick }) => (
  <div className={styles["todo-check-box"]}>
    <button className={classNames(styles["todo-check-box__button"], styles.button)} onClick={onClick}>
      <i className={classNames(styles["button__icon"], "far", {
        "fa-square": !isCompleted,
        "fa-check-square": isCompleted,
        [styles["button__icon--checked"]]: isCompleted
      })} />
    </button>
  </div>
);

TodoCheckBox.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoCheckBox;
