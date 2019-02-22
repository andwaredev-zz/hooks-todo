import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import Percentage from "../Percentage";
import { todos as initialTodos } from "../../constants";

import styles from "./Todos.module.css";

function withTodos({ todos: initialTodos = [], toggleAddNewIsVisbile }) {
  const [todos, setTodos] = useState(initialTodos);

  /**
   * Toggle a todo's isCompleted state
   * Updates state.todos
   * @param {String|Number} id Todo's unique identifier 
   * @returns {void}
   */
  const toggleCompletedById = id => {
    const todoIdx = todos.findIndex(({ id: _id }) => _id === id);
    if (todoIdx < 0) {
      console.error('wtf happened there..?');
      return;
    }

    const todo = todos[todoIdx];

    return setTodos([
      ...todos.slice(0, todoIdx),
      {
        ...todo,
        isCompleted: !todo.isCompleted
      },
      ...todos.slice(todoIdx + 1)
    ]);
  }

  const onNewTodoFormSubmit = (id, evt) => {
    evt.preventDefault();

    toggleAddNewIsVisbile();

    return setTodos(todos.concat({
      id,
      label: evt.target[id].value,
      isCompleted: false
    }));
  };

  return {
    todos,
    toggleCompletedById,
    onNewTodoFormSubmit
  };
}

function withPercentage(todos) {
  const getCompletedPercentage = todos =>
    todos.filter(({ isCompleted }) => isCompleted).length / todos.length;

  const [percentage, setPercentage] = useState(getCompletedPercentage(todos));

  useEffect(() => setPercentage(getCompletedPercentage(todos)), [todos]);

  return percentage;
}

function withAddNewToggle() {
  const [addNewIsVisible, setAddNewIsVisible] = useState(false);

  const toggleAddNewIsVisbile = () => setAddNewIsVisible(!addNewIsVisible);

  return {
    addNewIsVisible,
    toggleAddNewIsVisbile
  };
}

const Todos = () => {
  const {
    addNewIsVisible,
    toggleAddNewIsVisbile
  } = withAddNewToggle();

  const {
    todos,
    toggleCompletedById,
    onNewTodoFormSubmit
  } = withTodos({ todos: initialTodos, toggleAddNewIsVisbile });

  const percentage = withPercentage(todos);

  return (
    <div className={styles.todos}>
      <div className={styles["todos__header"]}>
        <div className={styles["todos__header__text"]}>
          <h1>To-Do</h1>
        </div>
        <Percentage percentage={percentage} />
      </div>
      <ul className={classNames(styles["todos__list"], styles.list)}>
        {todos.map(todo =>
          <Todo
            {...todo}
            key={todo.id}
            onCheckBoxClick={() => toggleCompletedById(todo.id)}
          />
        )}
        {
          addNewIsVisible ? (
            <NewTodoForm onSubmit={onNewTodoFormSubmit} onCancel={evt => {
              evt.preventDefault();
              return toggleAddNewIsVisbile();
            }} />
          ) : (
            <button
              className={classNames(styles["list__new-todo-item"], styles["new-todo-item"])}
              onClick={toggleAddNewIsVisbile}
            >
              <i className={classNames("far", "fa-plus-square", styles["new-todo-item__icon"])} />
              <span>Add New To-Do</span>
            </button>
          )
        }
      </ul>
    </div>
  );
};

export default Todos;
