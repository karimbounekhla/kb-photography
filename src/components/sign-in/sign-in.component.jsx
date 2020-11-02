import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span className="title">Sign in with your e-mail and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <FormButton type="submit">Sign In</FormButton>
            <FormButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
