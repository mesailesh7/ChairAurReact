import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };

  const decraseValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add values</button>
      <br />
      <button onClick={decraseValue}>Decrease values</button>
      <br />
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
};
export default App;
