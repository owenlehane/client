import React, { useState } from 'react';
import './Home.css'; 

function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [edit, setEdit] = useState({ id: null, text: '' });

  const addTodo = text => {
    const newTodo = { id: Date.now(), text: text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, text: newText } : todo;
    }));
  };

  const handleEditChange = e => {
    setEdit({ ...edit, text: e.target.value });
  };

  const handleSave = id => {
    editTodo(id, edit.text);
    setEdit({ id: null, text: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    // Redirect to login page or another appropriate action
    window.location.href = '/login'; 
  };

  return (
    <div>
      <div className="header">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {edit.id === todo.id ? (
              <input type="text" value={edit.text} onChange={handleEditChange} />
            ) : (
              <span>{todo.text}</span>
            )}
            {edit.id === todo.id ? (
              <button onClick={() => handleSave(todo.id)} className="save-btn">Save</button>
            ) : (
              <button onClick={() => setEdit({ id: todo.id, text: todo.text })} className="edit-btn">Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;


