import "./App.css";
import AddToDo from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilters } from "./components/VisibilityFilters";

function App() {
  return (
    <div className="container">
      <AddToDo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
export default App;
