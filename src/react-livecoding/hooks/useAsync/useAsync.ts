/*
Напиши хук useAsync, который принимает асинхронный callback
и возвращает объект с полями:
- data (результат выполнения callback)
- isLoading (идет ли загрузка)
- isError (произошла ли ошибка)
- error (сама ошибка, если есть)

Пример использования: сделаем запрос к jsonplaceholder api.

function App() {
  const { data, isLoading, isError, error } = useAsync(() =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json())
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
*/

export const useAsync = (callback: any, deps: any) => {};
