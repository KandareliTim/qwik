import { component$, useSignal, $, useStore } from "@builder.io/qwik";

export default component$((): any => {
  const list = useStore([]);
  const inputValue = useSignal('');

  const onInputChange = $((event: any) => inputValue.value = event?.target?.value)

  const addTodo = $(() => {
    list.push({text: inputValue.value})
    inputValue.value = ''
  })

  const renderItem = () => {
    if (list.length) {
      return list.map((item, index) => {
        return <li key={index}>{item.text}</li>
      })
    }

    return null
  }

  return (
    <>
      <div>
        <input type="text" name="text" value={inputValue.value} onInput$={onInputChange} />
        <button onClick$={addTodo}>Add item</button>
      </div>

      <ul>
        {renderItem()}
      </ul>
    </>
  );
});
