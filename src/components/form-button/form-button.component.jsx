import React from "react";

import "./form-button.styles.scss";

const FormButton = ({
  children,
  isGoogleSignIn,
  invertColors,
  ...itemProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      invertColors ? "inverted-colors" : ""
    } custom-button`}
    {...itemProps}
  >
    {children}
  </button>
);

export default FormButton;
