import { ResultI } from "App";
import React from "react";
import { Text, View } from "react-native";
import ResultLabel from "./ResultLabel";

export interface ResultsProps {
  cantidad: number;
  intereses: number;
  period: number;
  result: ResultI;
}

const Results: React.FunctionComponent<ResultsProps> = ({
  cantidad,
  intereses,
  period,
  result,
}) => {
  return (
    <>
      <Text>Resultados:</Text>
      <ResultLabel strong="Cantidad" value={cantidad.toString()} />
      <ResultLabel strong="Intereses" value={`${intereses}%`} />
      <ResultLabel strong="periodos" value={`${period} meses`} />
      <ResultLabel strong="monthly fee" value={`$ ${result.monthFee}`} />
      <ResultLabel strong="total fee" value={`$ ${result.totalFee}`} />
    </>
  );
};

export default Results;
