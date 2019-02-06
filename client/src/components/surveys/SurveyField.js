// SurveyField contains logic to render a single
// label and text input

import React from "react";

// export default props => {
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      {/* <input onChange={input.onChange} /> */}
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
