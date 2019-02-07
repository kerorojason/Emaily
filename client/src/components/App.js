import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; //let certain components able to call action-creaters as props
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import DashBoard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="background-img">
            <div className="dark-overlay">
              <Header />
              <div className="container ">
                {/* <Route path="/" exact={true} component={Landing} /> */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </div>
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
