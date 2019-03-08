import React from "react";
import { TweetsCard } from "../../components/TweetsCard";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch("http://10.1.10.240:5000/tweets");
      let tweets = await response.json();
      this.setState({ tweets });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { tweets } = this.state;
    return (
      <Container>
        <Content>
          {tweets &&
            tweets.map((tweet, idx) => <TweetsCard tweet={tweet} key={idx} />)}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: `Tweets - ${navigation.getParam("username")}`,
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#1da1f2"
  }
});
