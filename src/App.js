import { Switch, Route } from "react-router";
import Main from "./components/Main";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Water Quality Monitor</h1>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chart/:index" component={LineChart} />
      </Switch>
      <div className="attribution">
        Coded by
        <a href="https://kamari-1.github.io/" target="_blank" rel="noreferrer">
          <span> </span>Clement Oboh
        </a>
        .
      </div>
    </div>
  );
}

export default App;
