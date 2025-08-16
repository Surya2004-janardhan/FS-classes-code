import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Child from "./components/props";

import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  const data = [];
  useEffect(() => {

    console.log("useEffect called");
  }, [count ]);

  const handlechange = () => {
    setCount(count + 1);
  };

  return (
    <>
    {data &&
      <h1>{data}</h1>}
          
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            handlechange();
          }}
        >
          click here{" "}
        </button>
        <Child name="janardhan" />
      </div>
  

    </>
  );
}
