import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import PageList from "../components/PageList/pageList";
import history from "./app.history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={PageList} />
      </Router>
    );
  }
}
export default App;
