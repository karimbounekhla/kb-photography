import React from "react";

import "./form-button.styles.scss";

const FormButton = ({ children, ...itemProps }) => (
  <button className="custom-button" {...itemProps}>
    {children}
  </button>
);

export default FormButton;
