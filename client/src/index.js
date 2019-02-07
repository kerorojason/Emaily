// import "materialize-css/dist/css/materialize.min.css";
import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css";

import App from "./components/App";
import reducers from "./reducers";

//Development only axios helpers!
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
console.log("Stripe key is: " + process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is: " + process.env.NODE_ENV);
