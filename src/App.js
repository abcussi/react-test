import React, { useState } from "react";
import "./App.css";

const initialState = {
  loading: false,
  count: 0,
};

function App() {
  const myf = () => {
    console.log("algo", state.count);
    setstate({count : state.count+ 1});
  };
  const [state, setstate] = useState(initialState);
  return (
    <>
      <span>{state.count}</span>
      <button onClick={myf}>add</button>
    </>
  );
}

export default App;
