//Imported component, modules etc
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //Creating a state variable making the component controlled by react
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  //Submit button Functionality
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {/* Setting input value to todo state with setTodo function on user input change. */}
        <input
          className={styles.modernInput}
          onChange={(event) =>
            setTodo({ name: event.target.value, done: false })
          }
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
