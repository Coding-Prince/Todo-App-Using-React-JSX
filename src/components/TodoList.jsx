import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={style.list}>
      {/* Displaying Todos Item */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
