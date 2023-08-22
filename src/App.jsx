import { useState } from "react";
import Result from "./components/Result.jsx";
import Body from "./components/Body.jsx";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [h5Value, setH5Value] = useState("");

  return (
    <div className="calculator">
      <Result
        value={value}
        value2={value2}
        operation={operation}
        result={result}
        h5Value={h5Value}
        setH5Value={setH5Value}
      />
      <Body
        setValue={setValue}
        operation={operation}
        valueRes={value}
        valueRes2={value2}
        result={result}
        setValue2={setValue2}
        setOperation={setOperation}
        setResult={setResult}
        h5Value={h5Value}
      />
    </div>
  );
}

export default App;
