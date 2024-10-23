import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

// The <Provider> component makes the redux store available to any nested componenets that need to access the Redux store.

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
