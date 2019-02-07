//SurveyForm Shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import { Form, Button } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

class SurveyForm extends Component {
  renderFields2() {
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
      <div className="mt-5 p-4 opacity">
        <Form
          className="text-white "
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <IndexLinkContainer to="/surveys" activeHref="active">
            <Button variant="danger">Cancel</Button>
          </IndexLinkContainer>
          <Button type="submit" className="float-right">
            Next <i className="fas fa-check" />
          </Button>
        </Form>
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
