import React from "react";

import "./form-button.styles.scss";

const FormButton = ({ children, isGoogleSignIn, ...itemProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...itemProps}
  >
    {children}
  </button>
);

export default FormButton;
