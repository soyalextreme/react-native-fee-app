import React from "react";
import { Text, View } from "react-native";

export interface ResultLabelProps {
  strong: string;
  value: string;
}

const ResultLabel: React.FunctionComponent<ResultLabelProps> = ({
  value,
  strong,
}) => {
  return (
    <View>
      <Text>{strong}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default ResultLabel;
