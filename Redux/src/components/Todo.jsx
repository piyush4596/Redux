import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

//useSelector
//the useSelector hooks allow you to extract data or the state from the redux store using selector function. (returns the data)

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const markHandler = (isDone) => {
    if (isDone) {
    }
    console.log(isDone);
  };

  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => markHandler(todo.isDone)}>Mark</button>
          </li>
        ))}
      </ul>
    </>
  );
}

//
