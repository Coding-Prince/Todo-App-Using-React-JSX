//Imported files and component
import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

//Creating and Exporting the Todo Component
export default function Todo() {
  //State that saves submitted value inputed by user
  const [todos, setTodos] = useState([]);

  //Variable that stores the count of only completed todos
  const completedTodos = todos.filter((todo) => todo.done).length;

  //Variable that stores the count of the total number of todos
  const totalTodos = todos.length;

  //Returning the form and input to the Todo Component
  return (
    <div>
      {/* Controlled Input Comoponent Moved to Form Component */}
      <Form todos={todos} setTodos={setTodos} />

      {/* Displaying Todo Item Through TodoList Component */}
      <TodoList todos={todos} setTodos={setTodos} />
      {/* Displaying Completed Todos */}
      <Footer completedTodos={completedTodos}  totalTodos={totalTodos}/>
    </div>
  );
}
