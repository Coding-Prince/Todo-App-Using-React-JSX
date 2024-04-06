import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={style.list}>
      {/* Displaying Each Todo Item */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
