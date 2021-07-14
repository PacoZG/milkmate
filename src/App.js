import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import CowList from "./components/CowList";
import AddCow from "./components/AddCow";

function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
          <Route path="/list">
            <CowList />
          </Route>
          <Route path="/lisaa">
            <AddCow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
