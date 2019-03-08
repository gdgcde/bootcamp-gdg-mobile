import React from "react";
import { Component1, CustomButton } from "../../components/Component1";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
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
        <Component1 name="State A" state={stateA} />
        <Component1 name="State B" state={stateB} />
        <Component1 name="State C" state={stateC} />
        <View style={styles.buttonContainer}>
          <CustomButton onClick={this.switchValues} title="Switch states" />
          <CustomButton onClick={this.switchValues} title="Switch states" />
          <CustomButton onClick={this.switchValues} title="Switch states" />
        </View>
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
  buttonContainer: {
    flexDirection: "column"
  }
});

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Tweets",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "blue"
  }
});
