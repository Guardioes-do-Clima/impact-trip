// IdaEVolta.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SearchBar from "./SearchBar";
import ReportModal from "./ReportModal";
import data from "../malha_aerea3";

const SomenteIda = () => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [co2EmitidoValue, setCO2EmitidoValue] = useState("");
  const [florestaProtegida, setFlorestaProtegida] = useState("");
  const [valorCompensacao, setValorCompensacao] = useState(null);
  const [opcoesOrigem, setOpcoesOrigem] = useState([]);
  const [opcoesDestino, setOpcoesDestino] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const filtrarOpcoesOrigem = (texto) => {
    if (texto.length >= 3) {
      let opcoesFiltradas = [
        ...new Set(
          data
            .filter((item) =>
              item.origem.toUpperCase().includes(texto.toUpperCase())
            )
            .map((item) => item.origem)
        ),
      ];

      setOpcoesOrigem(opcoesFiltradas);
    } else {
      setOpcoesOrigem([]);
    }
  };

  const filtrarOpcoesDestino = (texto) => {
    if (texto.length >= 3) {
      let opcoesFiltradas = [
        ...new Set(
          data
            .filter((item) =>
              item.destino.toUpperCase().includes(texto.toUpperCase())
            )
            .map((item) => item.destino)
        ),
      ];

      setOpcoesDestino(opcoesFiltradas);
    } else {
      setOpcoesDestino([]);
    }
  };

  const selecionarOrigem = (opcao) => {
    setOrigem(opcao);
    setOpcoesOrigem([]);
  };

  const selecionarDestino = (opcao) => {
    setDestino(opcao);
    setOpcoesDestino([]);
  };

  const buscarCompensacao = () => {
    const resultado = data.find(
      (item) => item.origem === origem && item.destino === destino
    );

    if (resultado) {
      setValorCompensacao(resultado.valor.toFixed(2) / 2);
      setCO2EmitidoValue(resultado.co2Emitido.toFixed(2) / 2);
      setFlorestaProtegida(resultado.florestaProtegida.toFixed(1) / 2);
      setModalVisible(true);
    } else {
      setValorCompensacao(6.96);
      setCO2EmitidoValue(116);
      setFlorestaProtegida(8.7);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Saindo de:</Text>
        <SearchBar
          placeholder="Origem"
          value={origem}
          onChangeText={(text) => {
            setOrigem(text);
            filtrarOpcoesOrigem(text);
          }}
        />
        {opcoesOrigem.length > 0 && (
          <FlatList
            data={opcoesOrigem}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selecionarOrigem(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
          />
        )}
        <Text style={styles.label}>Indo para:</Text>
        <SearchBar
          placeholder="Destino"
          value={destino}
          onChangeText={(text) => {
            setDestino(text);
            filtrarOpcoesDestino(text);
          }}
        />
        {opcoesDestino.length > 0 && (
          <FlatList
            data={opcoesDestino}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selecionarDestino(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
          />
        )}
      </View>
      {origem.length >= 3 && destino.length >= 3 && (
        <Button title="Calcular" color="green" onPress={buscarCompensacao} />
      )}

      <ReportModal
        reportVisible={modalVisible}
        onClose={closeModal}
        co2EmitidoValue={co2EmitidoValue}
        valorCompensacao={valorCompensacao}
        areaFlorestaProtegida={florestaProtegida}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 15,
    //fontWeight: "bold",
    marginTop: 1,
    color: "green",
  },
  card: {
    width: 340,
    height: "auto",
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  optionText: {
    fontSize: 14,
    marginTop: 4,
  },
  resultContainer: {
    marginTop: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    alignSelf: "center",
  },
  notFoundText: {
    fontSize: 16,
    alignSelf: "center",
    color: "green",
    marginTop: 16,
  },
});

export default SomenteIda;
