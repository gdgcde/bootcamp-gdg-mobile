import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Component1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, state } = this.props;
    return (
      <View>
        <Text>
          This is the state {name}: {state}!
        </Text>
      </View>
    );
  }
}
