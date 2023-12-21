import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import { Selo } from "./Selo";

export function ReportModal({
  reportVisible,
  onClose,
  co2EmitidoValue,
  valorCompensacao,
  areaFlorestaProtegida,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={reportVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>
            O rastro de Gases de Efeito Estufa deixado por você:
          </Text>
          <Text style={styles.valor}>{`${co2EmitidoValue} Kg de CO2`}</Text>
          <Text style={styles.text}>
            A boa notícia é que você pode minimizar este impacto!
          </Text>
          <Text style={styles.text}>Compensando:</Text>
          <Text style={styles.valorDetails}>{`R$ ${valorCompensacao}`}</Text>
          <View style={styles.greenFootPrintContainer}>
            <Selo />
            <Text style={styles.text}>Chave Pix(CNPJ)</Text>
            <Text>091114500001-26</Text>
          </View>
          <Text style={styles.header}>
            Ao compensar esse valor você garante {areaFlorestaProtegida} m² de floresta protegida
          </Text>
          <Button title="X" color="black" onPress={onClose} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 17,
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  valor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "green",
    marginBottom: 5,
    textAlign: "center",
  },
  valorDetails: {
    fontSize: 35,
    color: "black",
    fontWeight: "bold",
    // marginTop: 5,
    // marginBottom: 5,
    textAlign: "center",
  },
  header: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    // fontWeight: "bold",
    fontStyle: "italic",
  },
  greenFootPrintContainer: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ReportModal;