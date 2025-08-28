import { useCallback, useState, useLayoutEffect } from "react";
import sendMetric from "metrics";
import sendData from "data";
import bigComputations from "bigComputations";


 
/*
 Проведи рефакторинг, найди возможные ошибки в коде
*/



export const RefactorMe = (props) => {
  const [data, setDate] = useState(bigComputations(props.argument));

  const [items] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      sendMetric("click");
    });
  });

  const click = useCallback((id) => {
    sendData(data, id);
  });

  return (
    <React.Fragment>
      {items.map((item) => (
        <div onClick={() => click(item.id)}>{item.id}</div>
      ))}
    </React.Fragment>
  );
};
