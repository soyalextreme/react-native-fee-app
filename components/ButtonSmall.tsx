import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ColorsHex } from "../constants/Colors";

export interface ButtonSmallProps {
  text?: string;
  onPress?: () => void;
}

const ButtonSmall: React.FunctionComponent<ButtonSmallProps> = ({
  text,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: ColorsHex.orange,
    padding: 15,
    width: "45%",
    borderRadius: 100,
  },

  text: {
    color: ColorsHex.white,
    fontSize: 12,
    textAlign: "center",
  },
});

export default ButtonSmall;
