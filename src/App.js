import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginPage from './pages/login/login.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currUser: null
    }
  }

  // Firebase Auth
  unsubFromauth = null;

  componentDidMount() {
    this.unsubFromauth = auth.onAuthStateChanged(user => {
      this.setState( {currUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubFromauth();
  }

  render() {
    console.log(this.state.currUser);
    return (
    <div className="App">
      <Header currUser={this.state.currUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={LoginPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
