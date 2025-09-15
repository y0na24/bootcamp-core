/*
Напиши хук useHover, который возвращает ref и boolean значение, которое
означет, есть ли на элементе на который навешен ref hover или нет.

function App() {
  const [ref, isHovered] = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}

*/

import { Ref } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {}
