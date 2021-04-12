import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { ColorsHex } from "../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import ButtonSmall from "./ButtonSmall";

export interface PickerPeriod {
  amount: number;
  text: string;
  id?: number;
}

export interface PropsFormContainer {
  cantidad: any;
  setCantidad: (cantidad: number) => void;
  interes: string;
  setInteres: (interes: number) => void;
  period: any;
  setCalculating?: (state: boolean) => void;
  setPeriod: (period: number) => void;
  resetStore?: () => void;
  handleCancel: () => void;
  handleSubmit: () => void;
}

type periodType = Array<PickerPeriod>;

const FormContainer: React.FunctionComponent<PropsFormContainer> = ({
  period,
  setPeriod,
  cantidad,
  setCantidad,
  interes,
  setInteres,
  handleCancel,
  handleSubmit,
}) => {
  // const [selectedPeriod, setSelectedPeriod] = React.useState<any>();

  const [periodTime, setPeriodTime] = React.useState<periodType>([
    {
      amount: 3,
      text: "3 meses",
      id: 1,
    },
    {
      amount: 6,
      text: "6 meses",
      id: 2,
    },
    {
      amount: 9,
      text: "9 meses",
      id: 3,
    },
    {
      amount: 12,
      text: "12 meses",
      id: 4,
    },
    {
      amount: 24,
      text: "24 meses",
      id: 5,
    },
  ]);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Ingresa tus datos</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Cantidad"
          placeholderTextColor={ColorsHex.orange}
          keyboardType="numeric"
          value={cantidad}
          onChangeText={(text) => setCantidad(parseInt(text))}
        />
        <TextInput
          style={[styles.textInput, styles.textInputFocus]}
          placeholder="Interes"
          placeholderTextColor={ColorsHex.orange}
          keyboardType="numeric"
          value={interes}
          onChangeText={(text) => setInteres(parseInt(text))}
        />
      </View>
      <Picker
        selectedValue={period}
        onValueChange={(itemValue, itemIndex) =>
          setPeriod(parseInt(itemValue as string))
        }
        style={styles.picker}
      >
        {periodTime.map((itemPeriod) => (
          <Picker.Item
            key={itemPeriod.id}
            label={itemPeriod.text}
            value={itemPeriod.amount}
          />
        ))}
      </Picker>
      <View style={styles.buttonContainer}>
        <ButtonSmall text="Calcular" onPress={handleSubmit} />
        <ButtonSmall text="Cancelar" onPress={handleCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    bottom: 0,
    width: "50%",
    paddingHorizontal: 15,
    backgroundColor: ColorsHex.greyDark,
    height: 60,
    borderRadius: 30,
    color: "white",
    borderBottomWidth: 3,
    borderBottomColor: ColorsHex.orange,
  },

  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  textInputFocus: {
    borderWidth: 3,
    borderColor: ColorsHex.orange,
  },
  picker: {
    backgroundColor: ColorsHex.greyDark,
    color: ColorsHex.orange,
  },

  formContainer: {
    backgroundColor: ColorsHex.greyClear,
    paddingVertical: "20%",
    paddingHorizontal: "10%",
    position: "absolute",
    width: "80%",
    borderRadius: 40,
    top: "100%",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  formTitle: {
    fontSize: 20,
    color: ColorsHex.greyDark,
    marginBottom: 25,
    fontWeight: "bold",
  },
});

export default FormContainer;
