/* 
Реализуй хук useDebounceValue аналогичный функции debounce() в JavaScript.

Пример:

function App() {
  // Это значение изменяется сразу же 
  const [value, setValue] = useState(...)
 
  Это значение изменяется если прошла секунда после изменения значения value.
  Мы можем завязаться на debouncedValue и тем самым оптимизировать запросы на бэкенд.
  
  const debouncedValue = useDebounce(value, 1000)
}

*/

export const useDebounceValue = (value: unknown) => {};
