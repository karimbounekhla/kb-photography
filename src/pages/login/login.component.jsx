import React from "react";

import "./login.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LogInPage = () => (
  <div className="login-page">
    <SignIn />
    <SignUp />
  </div>
);

export default LogInPage;
