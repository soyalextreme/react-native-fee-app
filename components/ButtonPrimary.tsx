import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ColorsHex } from "../constants/Colors";

export interface ButtonPimaryProps {
  text?: string;
  onPress?: () => void;
}

const ButtonPimary: React.FunctionComponent<ButtonPimaryProps> = ({
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
    padding: 20,
    paddingVertical: 50,
    width: "40%",
    borderRadius: 100,
  },

  text: {
    color: ColorsHex.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ButtonPimary;
