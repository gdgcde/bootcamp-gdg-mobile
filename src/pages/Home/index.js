import React from "react";
import { TweetsCard } from "../../components/TweetsCard";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import socket from "socket.io-client";

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
    this.subcribeToEvents();
  }

  subcribeToEvents = () => {
    console.log("SUBSCRIBE TO EVENTS")
    const io = socket("http://10.1.10.240:5000");
    io.on("tweet", data => {
      let { tweets } = this.state;
      tweets = [data, ...tweets];
      this.setState({ tweets: tweets });
    });
    io.on("like", data => {
      console.log("like sokcet")
      let tweets = this.state.tweets.map(tweet =>
        tweet._id === data._id ? data : tweet
      );
      console.log("Tweets", tweets)
      this.setState({ tweets: tweets });
    });
  };

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
