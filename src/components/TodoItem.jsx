//Imported component, modules, hooks ets
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  //"Utilizing state variable 'todos' and 'setTodos' function to delete items based on a condition."
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  //Function to handle click events and toggle the 'done' property of a todo item
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const dashedLine = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={dashedLine} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            ⛔
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
