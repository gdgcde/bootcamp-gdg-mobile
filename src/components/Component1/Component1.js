import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Component1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, state } = this.props;
    return (
      <View>
        <Text style={styles.text}>
          This is the state {name}: {state}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  }
});