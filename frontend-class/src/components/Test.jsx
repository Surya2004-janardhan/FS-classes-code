import React from "react";
import { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const handlechange = () => {
    setCount(count + 1);
  };
  const handlechangeDecrement = () => {
    if (count <= 0) {
      alert("Count cannot be less than zero");
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={() => handlechange()}> increment here </button>
      <button onClick={() => handlechangeDecrement()}> Decrement here </button>
    </>
  );
}
