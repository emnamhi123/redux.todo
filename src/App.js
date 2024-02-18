import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./Components/TodoList";
import Add from "./Components/Add";
import Filter from "./Components/Filter";

function App() {
  const { todos } = useSelector((state) => state.todoReducer);
  const { FilterItems } = useSelector((state) => state.todoReducer);

  let doneTodos = todos.filter((el) => el.isDone === true);
  let unDoneTodos = todos.filter((el) => el.isDone === false);

  return (
    <div className="App">
      <Add />
      <br />
      <Filter />
      <hr />
      <TodoList
        todos={
          FilterItems === "Done"
            ? doneTodos
            : FilterItems === "Undone"
            ? unDoneTodos
            : todos
        }
      />
    </div>
  );
}

export default App;
