import React from "react";
import { View, Text } from "react-native";

export const Component1 = props => {
  return (
    <View>
      <Text>This is the state {props.name}: {props.state}!</Text>
    </View>
  );
};

export default Component1;
