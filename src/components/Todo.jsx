//Imported files and component
import { useState } from "react";
import TodoItem from "./TodoItem";

//Creating and Exporting the Todo Component
export default function Todo() {

  //Creating a state variable making the component controlled by react
  const [todo, setTodo] = useState("");

  //State that saves submitted value inputed by user
  const [todos, setTodos] = useState([]);

  //Submit button Functionality
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  //Returning the form and input to the Todo Component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Setting input value to todo state with setTodo function on user input change. */}
        <input
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>

        {/* Displaying Todos Item */}
        {todos.map((item) => (
          <TodoItem key={item} item={item} />
        ))}
      </form>
    </div>
  );
}
