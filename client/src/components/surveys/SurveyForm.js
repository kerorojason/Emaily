//SurveyForm Shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => (
      <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
      />
    ));
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.props.handleSubmit(values => console.log(values))}> */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="btn-flat teal right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a " + name;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  // 存在state.form.surveyForm.value，允許多個form
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
