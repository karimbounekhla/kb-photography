import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...itemProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...itemProps} />
    {label ? (
      <label
        className={`${itemProps.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
