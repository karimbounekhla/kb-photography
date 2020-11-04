import React from "react";

import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import "./sign-up.styles.scss";
import { auth, createUser } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords must match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });

      // Empty form after user creation
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("ERROR creating new user: " + err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>No Account?</h2>
        <span className="title">Sign up with your e-mail and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="E-mail"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <div>
            <FormButton type="submit">Sign Up</FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
