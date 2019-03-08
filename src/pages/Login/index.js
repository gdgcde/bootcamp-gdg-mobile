import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { username } = this.state;
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <Button
          title="Go to Home"
          onPress={() => navigate("Home", { username })}
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = ({ navigation }) => ({
  title: "Login",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "blue"
  }
});
