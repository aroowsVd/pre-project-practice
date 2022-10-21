import { useState } from "react";

function Home() {
  const todos = [
    {
      id: 1,
      text: '투두스',
    },
    {
      id: 2,
      text: 'next',
    },
  ]
  const [text, setText] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Home;