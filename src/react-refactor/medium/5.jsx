/*
 TextField - компонент ui-kit'а.

 В чем может быть проблема в данной реализации? \
*/

export function MyComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <TextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}

function TextField() {
  const [text, setText] = useState("");

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}
