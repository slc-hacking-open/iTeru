import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import { rootReducer } from "./reducer";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/">
        <Redirect to="/新宿" />
      </Route>
      <Route path="/新宿" exact component={App} />
      <Route path="/清澄" exact component={App} />
      <Route path="/新大阪" exact component={App} />
      <Route path="/南港" exact component={App} />
      <Route exact>
        <Redirect to="/" />
      </Route>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
