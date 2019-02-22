import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Input.module.css";

function withValue(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = evt => {
    if (evt && evt.target) {
      setValue(evt.target.value || "");
    }
  }

  return {
    value,
    onChange
  };
}

/**
 * Simple controlled input component
 */
const Input = ({ className, autoFocus, initialValue, type, name }) => {
  const {
    value,
    onChange
  } = withValue(initialValue);

  return (
    <input
      className={classNames("input", styles.input, className)}
      type={type}
      name={name}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  initialValue: PropTypes.any,
  type: PropTypes.oneOf([
    "text"
  ]),
  name: PropTypes.string
}

Input.defaultProps = {
  className: undefined,
  autoFocus: false,
  initialValue: undefined,
  type: "text",
  name: undefined
};

export default Input;
