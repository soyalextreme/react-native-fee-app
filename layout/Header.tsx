import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ColorsHex } from "../constants/Colors";

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Footer({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.header__container}>
      <StatusBar barStyle="light-content" backgroundColor={ColorsHex.orange} />
      <Text style={styles.header__text}>{title}</Text>
      <Text style={styles.header__subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header__container: {
    backgroundColor: `${ColorsHex.greyDark}`,
    paddingVertical: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  header__text: {
    fontSize: 30,
    color: `${ColorsHex.white}`,
    fontWeight: "bold",
  },

  header__subtitle: {
    fontSize: 20,
    fontWeight: "100",
    color: `${ColorsHex.greyClear}`,
  },
});
