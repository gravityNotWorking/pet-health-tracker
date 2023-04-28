import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import React from "react";
import Input from "../Input";
import NextButton from "./NextButton";
import useFormContext from "../../hooks/useFormContext";

const Step1 = () => {
  const { setPetName, setPetAge, setStep } = useFormContext();

  const toStep2 = () => {
    setStep("step-2");
  };

  return (
    <View>
      <View>
        <Input setter={setPetName}>Pet Name </Input>
      </View>
      <View>
        <Input setter={setPetAge}>Pet Age</Input>
      </View>
      <View>
        <NextButton handlePress={toStep2} />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({});
