import PropTypes from "prop-types";
import { useEffect } from "react";

Result.propTypes = {
  value: PropTypes.string,
  operation: PropTypes.string,
  result: PropTypes.any,
  value2: PropTypes.string,
  h5Value: PropTypes.string,
  setH5Value: PropTypes.func,
};

export default function Result(props) {
  const { value, operation, result, value2, h5Value, setH5Value } = props;

  useEffect(() => {
    setH5Value(value + " " + operation + " " + value2);
  }, [value, operation, value2, setH5Value]);

  return (
    <div className="result">
      <div className="content">
        <input type="text" readOnly value={h5Value} />
        <h4>{result.length > 11 ? "ok" : result}</h4>
      </div>
    </div>
  );
}
