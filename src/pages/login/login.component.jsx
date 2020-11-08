import React from "react";
import { connect } from "react-redux";

import "./login.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LogInPage = (currUser) => (
  <div>
    {!currUser ? (
      <div className="login-page">
        <SignIn />
        <SignUp />
      </div>
    ) : (
      <div className="signed-in">
        <h2>You are already signed in.</h2>
      </div>
    )}
  </div>
);

const mapPropsToState = (state) => ({
  currUser: state.user.currUser,
});

export default connect(mapPropsToState)(LogInPage);
