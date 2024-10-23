import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

// Dispatching Action
// the useDispatch hook allows you to send or dispatch an action to the redux by giving the action as an argument to the despatch variable.

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="write your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
