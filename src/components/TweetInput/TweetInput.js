import React from "react";
import { StyleSheet } from "react-native";
import { View, Item, Input, Button, Text, Icon, Body } from "native-base";

export default class TweetInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: ""
    };
  }

  sendTweet = async newTweet => {
    const tweet = {
      author: "ivanc",
      content: newTweet
    };
    try {
      let response = await fetch("http://192.168.0.8:5000/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tweet)
      });
      let responseJson = await response.json();
      console.log("Response json", responseJson);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { newTweet } = this.state;
    return (
      <View style={styles.container}>
        <Item regular style={styles.item}>
          <Input
            onChangeText={newTweet => this.setState({ newTweet })}
            value={newTweet}
            placeholder="Qué estás pensando?"
          />
        </Item>
        <Button
          transparent
          style={styles.button}
          onPress={() => this.sendTweet(newTweet)}
        >
          <Icon active name="paper-plane" style={styles.icon} />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  item: {
    flex: 4
  },
  button: {
    flex: 1,
    height: 52,
    backgroundColor: "#1da1f2"
  },
  icon: {
    color: "white",
    alignSelf: "center"
  }
});
