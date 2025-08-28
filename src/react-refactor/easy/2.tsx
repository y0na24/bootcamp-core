import { useState } from "react";

/*
Проведи рефакторинг, найди возможные ошибки в коде
*/

export function App() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 23, 4, 6, 21, 3]);

  return (
    <div>
      <div>count</div>

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>

      <ul>
        {numbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}
