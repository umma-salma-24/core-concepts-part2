import "./App.css";
import Counter from "./counter";
import Team from "./team";
import Users from "./users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <h3>React core concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* <button onclick={handleClick}>click me</button> */}
    </>
  );
}

export default App;
