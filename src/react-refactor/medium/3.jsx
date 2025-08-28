import React, { useState } from "react";

/*
Ререндер дочернего компонента SubElement только при чётных значениях count

!!! props менять нельзя
*/

const ParentElement = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <>
      Parent: {count} <br />
      <SubElement clicker={increment} count={count} />
    </>
  );
};

const SubElement = ({ clicker, count }) => {
  return (
    <>
      Sub: {count} <br />
      <button onClick={clicker}>Increment</button>
    </>
  );
};
