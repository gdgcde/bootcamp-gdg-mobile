import React, { Component } from "react";
import { Button } from 'react-native'

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Button title="Go to Home" onPress={() => navigate("Home")} />;
  }
}
