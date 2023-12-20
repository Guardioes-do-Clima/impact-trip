import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../styles";
import { SelectList } from "react-native-dropdown-select-list";
import ReportModal from "./ReportModal";
import data from "../malha_viaria";

export default function MalhaViaria() {
  const [fatorConversao, setFatorConversao] = useState("");
  const [qtdCombustivel, setQtdCombustivel] = useState("");
  const [co2EmitidoValue, setCO2EmitidoValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const fatorCustoCO2EmKg = 0.06;
  const fatorConservacaoFloresta = 0.8;

  const co2Emitido = () => {
    const resultado = (fatorConversao * qtdCombustivel).toFixed(2);
    setCO2EmitidoValue(resultado);
    setModalVisible(true); // Mostrar o modal quando o cálculo estiver pronto
  };

  const valorCompensacao = () => {
    let result = co2EmitidoValue * fatorCustoCO2EmKg;
    return result.toFixed(2);
  };

  const areaFlorestaProtegida = () => {
    let result = valorCompensacao() * fatorConservacaoFloresta;
    return result.toFixed(1);
  };

  const handleInput = (text) => {
    setQtdCombustivel(text);
  };

  const handleSelect = (value) => {
    const selectedData = data.find((item) => item.value === value);
    if (selectedData) {
      setFatorConversao(selectedData.fatorConversao);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardCar}>
        <View style={styles.inputSelect}>
          <SelectList
            setSelected={(val) => handleSelect(val)}
            data={data}
            placeholder="Selecione um tipo de veículo"
            save="value"
            value="value"
          />
        </View>
        <Text style={styles.text}>Quantidade de combustível</Text>
        <TextInput
          style={styles.inputNumber}
          placeholder="litros ou metros cúbicos"
          keyboardType="numeric"
          onChangeText={(text) => handleInput(text)}
          value={qtdCombustivel}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          color="#26944d"
          title="Calcular"
          onPress={co2Emitido}
        />
      </View>
      <ReportModal
        reportVisible={modalVisible}
        onClose={closeModal}
        co2EmitidoValue={co2EmitidoValue}
        valorCompensacao={valorCompensacao()}
        areaFlorestaProtegida={areaFlorestaProtegida()}
      />
    </View>
  );
}