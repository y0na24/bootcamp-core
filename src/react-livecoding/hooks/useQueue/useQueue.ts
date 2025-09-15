/*
Напиши хук useQueue, который реализует простую очередь.

Теория про структуру данных "Очередь" - https://doka.guide/tools/structure-data-in-js/#ocheredi

Но у нас в React'е состояние должно быть иммутабельное,
имей это ввиду при решении задачи.

Хук должен уметь:
- возвращать первый и последний элемент
- возвращать сам массив очереди
- возвращать размер очереди
- добавлять элемент в конец
- удалять элемент из начала
- очищать всю очередь

export interface UseQueueReturn<Value> {
  first: Value;
  last: Value;
  queue: Value[];
  size: number;
  add: (element: Value) => void;
  clear: () => void;
  remove: () => Value;
}

Пример использования:
function App() {
  const { queue, add, remove, clear, first, last, size } = useQueue<number>([1, 2, 3])

  return (
    <div>
      <div>Queue: {queue.join(", ")}</div>
      <div>First: {first}</div>
      <div>Last: {last}</div>
      <div>Size: {size}</div>
      <button onClick={() => add(size + 1)}>Add</button>
      <button onClick={() => remove()}>Remove</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
*/

interface UseQueueReturn<Value> {
  first: Value;
  last: Value;
  queue: Value[];
  size: number;
  add: (element: Value) => void;
  clear: () => void;
  remove: () => Value;
}

export const useQueue = (init: any): UseQueueReturn => {};
