import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Percentage.module.css";

const Percentage = ({ className, percentage }) => (
  <div className={classNames(styles.percentage, className)}>
    <span className={styles["percentage__label"]}>Percentage Completed: </span>
    <div className={classNames("progress", styles["percentage__progress"], styles.progress, {
      [styles["percentage__progress--empty"]]: percentage <= 0,
      [styles["progress--empty"]]: percentage <= 0,
      [styles["percentage__progress--full"]]: percentage >= 1,
      [styles["progress--full"]]: percentage >= 1,
    })}>
      <div
        className={classNames(
          "progress-bar",
          styles["progress__progress-bar"],
          styles["progress-bar"]
        )}
        role="progressbar"
        style={{ width: `${percentage * 100}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className={styles["progress-bar__label"]}>{Math.round(percentage * 100)}%</span>
      </div>
    </div>
  </div>
);

Percentage.propTypes = {
  className: PropTypes.string,
  percentage: PropTypes.number.isRequired
};

Percentage.defaultProps = {
  className: undefined
};

export default Percentage;
