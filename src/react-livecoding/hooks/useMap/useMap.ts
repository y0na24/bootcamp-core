/*
Напиши хук useMap, который работает с Map внутри React state.
Хук должен уметь:
- хранить Map
- добавлять или обновлять значение по ключу
- проверять наличие ключа
- удалять элемент по ключу
- очищать Map
- сбрасывать Map к начальному состоянию
- возвращать размер Map

export interface UseMapReturn<Key, Value> {
  size: number;
  value: Map<Key, Value>;
  clear: () => void;
  has: (key: Key) => boolean;
  remove: (key: Key) => void;
  reset: () => void;
  set: (key: Key, value: Value) => void;
}

Пример использования:

function App() {
  const { value: map, set, has, remove, clear, reset, size } = useMap<string, number>([
    ["a", 1],
    ["b", 2],
  ]);

  return (
    <div>
      <div>Size: {size}</div>
      <div>Has "a": {has("a") ? "yes" : "no"}</div>
      <button onClick={() => set("c", 3)}>Add "c"</button>
      <button onClick={() => remove("a")}>Remove "a"</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
      <pre>{JSON.stringify(Array.from(map.entries()), null, 2)}</pre>
    </div>
  );
}
*/

export const useMap = (init: any): UseMapReturn<Key, Value> => {};
