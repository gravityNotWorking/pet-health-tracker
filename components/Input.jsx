import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ children, setter }) => {
  return (
    <View>
      <Text>{children}</Text>
      <TextInput onChangeText={setter} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
