// SurveyField contains logic to render a single
// label and text input

import React from "react";
import { Form } from "react-bootstrap";

// export default props => {
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} style={{ marginBottom: "5px" }} />
      {/* <input onChange={input.onChange} /> */}
      <div className="text-danger" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </Form.Group>
  );
};
