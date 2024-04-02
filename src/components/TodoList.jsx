import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      {/* Displaying Todos Item */}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
