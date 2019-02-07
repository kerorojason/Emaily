import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <p className="text-muted">{label}</p>
        <p>{formValues[name]}</p>
        <hr className="white-hr" />
      </div>
    );
  });

  return (
    <div className="mt-5 p-4 opacity text-white">
      <h3 className="mb-4">Please confirm your entries</h3>
      {reviewFields}
      <Button onClick={onCancel} className="white-text" variant="warning">
        Back
      </Button>
      <Button
        onClick={() => submitSurvey(formValues, history)}
        className="white-text float-right"
        variant="success"
      >
        Send Survey <i className="fas fa-envelope" />
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
