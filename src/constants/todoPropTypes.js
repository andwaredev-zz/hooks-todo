import PropTypes from "prop-types";

export default  {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
};
