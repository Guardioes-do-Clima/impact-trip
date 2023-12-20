import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const SelectionBar = ({ selectedComponent, onSelect }) => {
  return (
    <View style={styles.container}>
      <View style={selectedComponent === "IdaEVolta" ? styles.selectedSegment : styles.segment}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("IdaEVolta")}
        >
          <Ionicons name="ios-swap-horizontal" size={24} color="black" />
          <Text>Ida e Volta</Text>
        </TouchableOpacity>
      </View>
      <View style={selectedComponent === "SomenteIda" ? styles.selectedSegment : styles.segment}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("SomenteIda")}
        >
          <MaterialIcons name="arrow-forward" size={24} color="black" />
          <Text>Somente Ida</Text>
        </TouchableOpacity>
      </View>
      <View style={selectedComponent === "Multidestinos" ? styles.selectedSegment : styles.segment}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("Multidestinos")}
        >
          <MaterialIcons name="list" size={24} color="black" />
          <Text>Conexões</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff", // Adicione a cor desejada de fundo
    height: 43,
    width: 340,
    borderRadius: 10,
    elevation: 5, // Adicione sombra se necessário
  },
  segment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSegment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#26944d',
    borderRadius: 10,
    elevation: 5
  },
  button: {
    alignItems: "center",
  },
});

export default SelectionBar;