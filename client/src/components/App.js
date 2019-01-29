import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux"; //let certain components able to call action-creaters as props
import * as actions from "../actions";

import Landing from "./Landing";
const DashBoard = () => {
  return <h2>DashBoard</h2>;
};

const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            {/* <Route path="/" exact={true} component={Landing} /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
