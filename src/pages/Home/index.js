import React from "react";
import { TweetsCard } from "../../components/TweetsCard";
import { TweetInput } from "../../components/TweetInput";
import { StyleSheet } from "react-native";
import { Container, Content, Spinner } from "native-base";
import socket from "socket.io-client";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      loaded: false
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch("http://192.168.0.8:5000/tweets");
      let tweets = await response.json();
      this.setState({ tweets, loaded: true });
    } catch (error) {
      console.error(error);
    }
    this.subcribeToEvents();
  }

  subcribeToEvents = () => {
    console.log("SUBSCRIBE TO EVENTS");
    const io = socket("http://192.168.0.8:5000");
    io.on("tweet", data => {
      console.log("News tweets", data)
      let { tweets } = this.state;
      tweets = [data, ...tweets];
      this.setState({ tweets: tweets });
    });
    io.on("like", data => {
      console.log("News like", data)
      let tweets = this.state.tweets.map(tweet =>
        tweet._id === data._id ? data : tweet
      );
      console.log("Tweets", tweets);
      this.setState({ tweets: tweets });
    });
  };

  render() {
    const { tweets, loaded } = this.state;
    return (
      <Container>
        <Content>
          <TweetInput />
          {!loaded && <Spinner color="#1da1f2" />}
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
