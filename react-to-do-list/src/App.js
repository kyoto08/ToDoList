import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>To Do</h1>
      <Todo text='make a cup of tea'/>
      <Todo text='make a cup of coffee'/>
      <Todo text='relax'/>
    </div>
  );
}

export default App;
