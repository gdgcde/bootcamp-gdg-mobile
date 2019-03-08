import React from "react";
import { View, Button } from "react-native";

export const CustomButton = props => {
  return (
    <View>
      <Button title={props.title} onPress={props.onClick} />
    </View>
  );
};

export default CustomButton;
