import React, { useState } from 'react';

function Todo(props) {
  const [text, setText] = useState(props.text);

  const updateTodo = async () => {
    await props.updateTodo(props.id, text);
  }

  const deleteTodo = async () => {
    await props.deleteTodo(props.id);
  }

  return (
    <div style={{ marginTop: 10, border: '1px solid black', padding: 10 }}>
      <input
        placeholder='Todo'
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <h2>isDone: {String(props.isDone)}</h2>
      <h2>Id: {props.id}</h2>
      <button onClick={updateTodo}>Save</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;