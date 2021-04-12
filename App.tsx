import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Header from "./layout/Header";
import FormContainer from "./components/FormContainer";
import ButtonPimary from "./components/ButtonPrimary";
import { ColorsHex } from "./constants/Colors";
import Results from "./components/Results";

// interes / 100
// formula: (capital / (1 - intres elevado a los meses ) )/ intereses

export interface ResultI {
  monthFee: number;
  totalFee: number;
}

export interface PropsApp {}

const App = () => {
  const [cantidad, setCantidad] = React.useState<any>(null);
  const [interes, setInteres] = React.useState<any>(null);
  const [period, setPeriod] = React.useState<number>(3);
  const [result, setResult] = React.useState<ResultI>({
    monthFee: 0,
    totalFee: 0,
  });
  const [calculating, setCalculating] = React.useState<boolean>(false);
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const resetStore = () => {
    setCantidad("");
    setInteres("");
    setPeriod(3);
  };

  const handleCancel = () => {
    resetStore();
    setCalculating(false);
  };

  const handleSubmit = () => {
    if (!cantidad || !interes || !setPeriod) {
      Alert.alert(
        "Falta algun dato",
        "Verifica el formulario te debe de faltar algun dato"
      );

      return;
    }

    const interesDecimal = parseInt(interes) / 100;
    const fee =
      cantidad / ((1 - Math.pow(interesDecimal + 1, -period)) / interesDecimal);

    setResult({
      monthFee: parseInt(fee.toFixed(2)),
      totalFee: parseInt((fee * period).toFixed(2)),
    });

    setShowResults(true);
    setCalculating(false);
  };

  const handleNew = () => {
    setCalculating(true);
    setShowResults(false);
    resetStore();
  };

  const store = {
    cantidad,
    setCantidad,
    interes,
    setInteres,
    period,
    setPeriod,
    setCalculating,
    resetStore,
    handleCancel,
    handleSubmit,
  };
  return (
    <View>
      <Header title="Presupuesto App" subtitle="Calcula tu presupuesto" />
      {calculating ? (
        <>
          <View style={style.modalFilter}></View>
          <FormContainer {...store} />
        </>
      ) : (
        <View style={style.mainContainer}>
          <ButtonPimary text="Nuevo Presupuesto" onPress={handleNew} />
        </View>
      )}
      <View>
        {showResults ? (
          <Results
            cantidad={parseInt(cantidad)}
            intereses={parseInt(interes)}
            period={period}
            result={result}
          />
        ) : (
          <Text>Listos para calcular.</Text>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorsHex.greyClear,
    paddingVertical: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalFilter: {
    backgroundColor: "rgba(38,12,12,0.5)",
    position: "absolute",
    width: "100%",
    height: "500%",
  },
});

export default App;
