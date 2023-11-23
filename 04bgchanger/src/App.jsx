import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-48">
          <div className="flex flex-wrap justify-center gap-3 px-5 py-1 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setColor("red")}
              className="px-5 py-2 text-white rounded-full shadow-lg outline-none"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-5 py-2 text-white rounded-full shadow-lg outline-none"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-5 py-2 text-white rounded-full shadow-lg outline-none"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
