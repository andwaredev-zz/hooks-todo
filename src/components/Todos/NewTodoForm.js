import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
import Input from "../Input";

import styles from "./NewTodoForm.module.css";

const NewTodoForm = ({ onSubmit, onCancel }) => {
  const id = uuid();

  return (
    <form className={styles["new-todo-form"]} onSubmit={evt => onSubmit(id, evt)} onReset={onCancel}>
      <div className={styles["new-todo-form__header"]}>
        <h5>Add New To-Do</h5>
      </div>
      <div
        className={classNames(
          "form-group",
          styles["new-todo-form__form-group"],
          styles["form-group"]
        )}
      >
        <label className={styles["form-group__label"]} html-for={id}></label>
        <Input className={styles["form-group__input"]} name={id} autoFocus />
      </div>
      <button
        className={classNames(
          "btn",
          "btn-primary",
          styles["new-todo-form__button"],
          styles["new-todo-form__submit-button"]
        )}
        type="submit"
      >
        Add To-Do
      </button>
      <button
        className={classNames(
          "btn",
          "btn-light",
          styles["new-todo-form__button"],
          styles["new-todo-form__cancel-button"]
        )}
        type="reset"
      >
        Cancel
      </button>
    </form>
  );
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default NewTodoForm;
