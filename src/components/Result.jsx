import PropTypes from "prop-types";
import { useEffect } from "react";

Result.propTypes = {
  value: PropTypes.any,
  operation: PropTypes.string,
  result: PropTypes.any,
  value2: PropTypes.string,
  h5Value: PropTypes.string,
  setH5Value: PropTypes.func,
};

export default function Result(props) {
  const { value, operation, result, value2, h5Value, setH5Value } = props;

  useEffect(() => {
    let newValue = value;
    if (newValue != "") {
      newValue = newValue.toString();
      if (!newValue.split(".").length < 2) {
        newValue = parseFloat(value);
        newValue = newValue.toLocaleString();
      }
    }

    let newValue2 = value2;
    if (newValue2 != "") {
      newValue2 = newValue2.toString();
      if (!newValue2.split(".").length < 2) {
        newValue2 = parseFloat(value2);
        newValue2 = newValue2.toLocaleString();
      }
    }

    setH5Value(newValue + " " + operation + " " + newValue2);
  }, [value, operation, value2, setH5Value]);

  let newResult = result;
  if (result != "") {
    if (result.includes(".")) {
      let isLong = result.split(".");
      if (isLong[1][2] == "0" && isLong[1][3] == "0") {
        isLong = [isLong[0], isLong[1][0] + isLong[1][1]];
        newResult = isLong.join(".");
      }
    }
  }

  const maxLength = 10;
  if (result.length > maxLength) {
    let trimResult = [];
    for (let i = 0; i < maxLength; i++) {
      trimResult = [...trimResult, result[i]];
    }
    newResult = trimResult.join("");
  }

  if (newResult != "") {
    newResult = parseFloat(newResult);
    newResult = newResult.toLocaleString();
  }

  if (newResult.includes("-")) {
    newResult = newResult.split("");
    newResult.splice(1, 0, " ");
    newResult = newResult.join("");
  }

  return (
    <header>
      <input type="text" readOnly value={h5Value} maxLength="19" />
      <h4>{newResult}</h4>
    </header>
  );
}
