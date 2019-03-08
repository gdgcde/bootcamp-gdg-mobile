import React from "react";
import { StyleSheet } from "react-native";
import { View, Item, Input, Button, Text, Icon } from "native-base";

export const TweetInput = props => {
  return (
    <View style={styles.container}>
      <Item regular style={styles.item}>
        <Input placeholder="Qué estás pensando?" />
      </Item>
      <Button transparent style={styles.button}>
        <Icon active name="paper-plane" style={styles.icon} />
      </Button>
    </View>
  );
};

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

export default TweetInput;
