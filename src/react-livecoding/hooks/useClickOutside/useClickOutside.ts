/*

Напиши хук useClickOutside, который возвращает ref, который навешивается на элемент.

Если кликнуть ВНЕ элемента, на который мы повесили ref, то отработает callback, который
мы прокинули в хук

Пример:
function Component() {
  const ref = useClickOutside(() => {
    alert('clicked outside')
  });
  return <div ref={ref}>..</div>
}
*/

export function useClickOutside(callback: () => void) {}
