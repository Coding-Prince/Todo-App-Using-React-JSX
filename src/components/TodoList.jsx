//Imported Files
import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {

  //Sorting todo based on done property
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {/* Displaying Each sorted todo Item */}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
