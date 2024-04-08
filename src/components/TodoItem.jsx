import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {

  //"Utilizing state variable 'todos' and 'setTodos' function to delete items based on a condition."
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log(item)
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item.name}
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
