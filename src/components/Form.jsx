import { useState } from "react";

export default function Form({ todos, setTodos }) {
  //Creating a state variable making the component controlled by react
  const [todo, setTodo] = useState("");

  //Submit button Functionality
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Setting input value to todo state with setTodo function on user input change. */}
      <input
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
