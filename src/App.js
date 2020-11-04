import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginPage from './pages/login/login.component';
import { auth, createUser } from './firebase/firebase.utils';

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
    this.unsubFromauth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      } else {
        this.setState({
          currUser: userAuth
        });
      }

      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubFromauth();
  }

  render() {
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
