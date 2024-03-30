//Importing useState hook from react
import { useState } from "react";

//Creating and Exporting the Todo Component
export default function Todo() {

  //Creating a state variable making the component controlled by react
  const [todo, setTodo] = useState("");

  //Returning the form and input to the Todo Component
  return (
    <div>
      <form>
        {/* Using the setTodo funct to set the value of the input to the todo state variable to be = event.target.value when the user trys to change the value of the input */}
        <input
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
