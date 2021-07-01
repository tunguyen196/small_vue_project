import Header from "components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/index"></Route>
          <Route path="/about"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
