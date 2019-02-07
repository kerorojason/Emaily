import React from "react";
import SurveyList from "./surveys/SurveyList";
import { LinkContainer } from "react-router-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <LinkContainer to="/surveys/new">
          <button className="btn-fixed btn btn-danger btn-circle btn-lg box-shadow">
            <i className="fas fa-plus fa-1x" />
          </button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Dashboard;
