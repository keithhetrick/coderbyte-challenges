import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  // Solution without helper function
  return (
    <button onClick={() => setToggle(!toggle)}>{toggle ? "ON" : "OFF"}</button>
  );

  // ========================================================
  // Solution with provided handleClick helper function
  function handleClick() {
    setToggle((prev) => !prev);
  }

  return <button onClick={handleClick}>{toggle ? "ON" : "OFF"}</button>;
}
