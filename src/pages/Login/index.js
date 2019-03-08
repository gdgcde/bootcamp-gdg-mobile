import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Button
} from "native-base";

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
    console.log("USERNAME ", username);
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            }}
          />
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label>Username</Label>
              <Input
                onChangeText={username => this.setState({ username })}
                value={username}
              />
            </Item>
            <Button
              disabled={!username}
              onPress={() => navigate("Home", { username })}
              style={styles.button}
            >
              <Text>Login!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  item: {
    width: 300,
    alignSelf: "center"
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#1da1f2"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center"
  }
});

LoginScreen.navigationOptions = ({ navigation }) => ({
  title: "Login",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#1da1f2"
  }
});
