import PropTypes from "prop-types";

Body.propTypes = {
  setValue: PropTypes.func,
  valueRes: PropTypes.any,
  setValue2: PropTypes.func,
  setOperation: PropTypes.func,
  setResult: PropTypes.func,
  operation: PropTypes.string,
  valueRes2: PropTypes.string,
  h5Value: PropTypes.string,
  result: PropTypes.any,
};

export default function Body(props) {
  const {
    valueRes,
    setValue,
    valueRes2,
    setValue2,
    setOperation,
    operation,
    setResult,
    h5Value,
    result,
  } = props;

  Button.propTypes = {
    value: PropTypes.string,
    nameClass: PropTypes.string,
  };

  function trimZero(value) {
    const newVal = value.split(".");
    newVal[1] == "0000" ? setResult(newVal[0]) : setResult(value);
  }

  function evaluate(values) {
    const isX = values.split(" ");
    if (isX[1] == "x") {
      isX[1] = "*";
      let newValue = isX.join(" ");
      newValue = newValue.split(",");
      newValue = newValue.join("");
      const result = eval(newValue);
      const newResult = result.toFixed(4);
      trimZero(newResult);
    } else {
      let newValue = values.split(",");
      newValue = newValue.join("");
      const result = eval(newValue);
      const newResult = result.toFixed(4);
      trimZero(newResult);
    }
  }

  function Button(props) {
    const { value, nameClass } = props;

    function remove(btn, result) {
      if (btn == "AC") {
        setValue("");
        setValue2("");
        setOperation("");
        setResult("");
      } else {
        setValue(result);
        setOperation(btn);
        setValue2("");
        setResult("");
      }
    }

    function isOperation() {
      if (operation.includes("+")) {
        evaluate(h5Value);
      } else if (operation.includes("-")) {
        evaluate(h5Value);
      } else if (operation.includes("x")) {
        evaluate(h5Value);
      } else if (operation.includes("/")) {
        evaluate(h5Value);
      }
    }

    function handleBtnCalc() {
      switch (value) {
        case "AC":
          remove(value);
          break;

        case "Del":
          if (operation == "") {
            if (valueRes != "") {
              setValue(valueRes.slice(0, -1));
            }
          } else {
            if (valueRes2 != "") {
              setValue2(valueRes2.slice(0, -1));
            } else if (operation != "") {
              setOperation("");
            }
          }

          break;

        case "/":
          if (result != "") {
            remove(value, result);
          } else {
            setOperation(value);
          }
          break;

        case "x":
          if (result != "") {
            remove(value, result);
          } else {
            setOperation(value);
          }
          break;

        case "-":
          if (result != "") {
            remove(value, result);
          } else {
            setOperation(value);
          }
          break;

        case "+":
          if (result != "") {
            remove(value, result);
          } else {
            setOperation(value);
          }
          break;

        case "%":
          if (operation == "") {
            if (valueRes != "") {
              let first = parseFloat(valueRes);
              setValue(first / 100);
            }
          } else {
            if (valueRes2 != "") {
              let second = parseFloat(valueRes2);
              setValue2(second / 100);
            }
          }

          if (result != "") {
            const newValue = parseFloat(result);
            setResult("");
            setValue2("");
            setOperation("");
            setValue(newValue / 100);
          }
          break;

        case "=":
          if (operation != "") {
            if (valueRes2 != "") {
              isOperation();
            }
          }
          break;

        case ".":
          if (operation == "") {
            if (valueRes == "") {
              setValue("0" + value);
            } else if (valueRes.includes(".")) {
              return;
            } else {
              setValue(valueRes + value);
            }
          } else {
            if (valueRes2 == "") {
              setValue2("0" + value);
            } else if (valueRes2.includes(".")) {
              return;
            } else {
              setValue2(valueRes2 + value);
            }
          }
          break;

        case "00":
          if (operation == "") {
            if (valueRes == "") {
              return;
            } else if (valueRes == "0") {
              return;
            } else {
              setValue(valueRes + value);
            }
          } else {
            if (valueRes2 == "") {
              return;
            } else if (valueRes2 == "0") {
              return;
            } else {
              setValue2(valueRes2 + value);
            }
          }
          break;

        case "0":
          if (operation == "") {
            if (valueRes == "") {
              setValue(value);
            } else if (valueRes.includes(".")) {
              setValue(valueRes + value);
            } else if (valueRes.startsWith("0")) {
              setValue(value);
            } else {
              setValue(valueRes + value);
            }
          } else {
            if (valueRes2 == "") {
              setValue2(value);
            } else if (valueRes2.includes(".")) {
              setValue2(valueRes2 + value);
            } else if (valueRes2.startsWith("0")) {
              setValue2(value);
            } else {
              setValue2(valueRes2 + value);
            }
          }
          break;

        default:
          if (operation == "") {
            if (valueRes == "0") {
              setValue(value);
            } else {
              setValue(valueRes + value);
            }
          } else {
            if (valueRes2 == "0") {
              setValue2(value);
            } else {
              setValue2(valueRes2 + value);
            }
          }

          if (result !== "") {
            setResult("");
            setValue(value);
            setOperation("");
            setValue2("");
          }
          break;
      }
    }

    return (
      <button
        className={nameClass}
        onClick={handleBtnCalc}
        disabled={value == " " ? true : false}
        style={{ cursor: value == " " ? "auto" : "pointer" }}
      >
        {value}
      </button>
    );
  }

  return (
    <div className="body">
      <Button nameClass="other" value={"AC"} />
      <Button nameClass="other" value={"Del"} />
      <Button nameClass="other" value={"%"} />
      <Button nameClass="operation" value={"/"} />
      <Button value={"7"} />
      <Button value={"8"} />
      <Button value={"9"} />
      <Button nameClass="operation" value={"x"} />
      <Button value={"4"} />
      <Button value={"5"} />
      <Button value={"6"} />
      <Button nameClass="operation" value={"-"} />
      <Button value={"1"} />
      <Button value={"2"} />
      <Button value={"3"} />
      <Button nameClass="operation" value={"+"} />
      <Button value={"00"} />
      <Button value={"0"} />
      <Button value={"."} />
      <Button nameClass="operation" value={"="} />
    </div>
  );
}
