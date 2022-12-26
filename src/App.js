import "./App.css";
import Example from "./render-props/Example";

function App() {
  return (
    <div className="App">
      <Example
        render={function (number) {
          return (
            <nav>
              <ul>
                {number.map((a) => (
                  <li>{a}</li>
                ))}
              </ul>
            </nav>
          );
        }}
      />
    </div>
  );
}

export default App;
