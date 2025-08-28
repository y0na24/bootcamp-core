import { useState, useEffect } from "react";

/*
 Исправить ошибки в коде, но нельзя ставить зависимости в useEffect
*/

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Count: {count}</div>;
};

export default Counter;
