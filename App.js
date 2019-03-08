import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateA: "stateA",
      stateB: "stateB",
      stateC: 1
    };
    setInterval(() => {
      this.setState({ stateC: this.state.stateC + 1 });
    }, 1000);
  }

  switchValues = () => {
    const { stateA, stateB } = this.state;
    this.setState({ stateA: stateB, stateB: stateA });
  };

  render() {
    console.log("States", this.state);
    const { stateA, stateB, stateC } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>This is the state A: {stateA}!</Text>
        <Text>This is the state B: {stateB}!</Text>
        <Text>This is the state C: {stateC}!</Text>
        <Button title="Switch states" onPress={this.switchValues} />
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
  }
});
