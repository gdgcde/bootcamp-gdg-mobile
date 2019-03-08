import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: `Tweets - ${navigation.getParam("username")}`,
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#1da1f2"
  }
});
