import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import Todo from './Components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const todosCollectionRef = collection(db, 'todos');

  const getTodos = async () => {
    const data = await getDocs(todosCollectionRef);
    // setTodos([]);
    setTodos(data.docs.map(doc => ({...doc.data(), id: doc.id})))
  };

  const createTodo = async () => {
    await addDoc(todosCollectionRef, { text: text, isDone: false });
    setText('');
    // await getTodos();
  };

  const updateTodo = async (id, newText) => {
    const todoDoc = doc(db, 'todos', id);
    const newFields = { text: newText };
    await updateDoc(todoDoc, newFields);
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);

    const newTodos = [];
    todos.map(todo => {
      if (todo.id !== id)
        newTodos.push(todo);
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <input 
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder='Text: ' />
      <button onClick={createTodo} >Create Todo</button>

      {
        todos.map(todo => {
          return (
            <Todo
              text={todo.text}
              isDone={todo.isDone}
              id={todo.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })
      }
    </div>
  );
}

export default App;
