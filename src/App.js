import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
